import { useEffect, useRef, type CSSProperties } from 'react';
import { Renderer, Program, Mesh, Triangle } from 'ogl';
import './GradientBlinds.css';

const MAX_COLORS = 8;
const hexToRGB = (hex: string) => {
  const c = hex.replace('#', '').padEnd(6, '0');
  const r = parseInt(c.slice(0, 2), 16) / 255;
  const g = parseInt(c.slice(2, 4), 16) / 255;
  const b = parseInt(c.slice(4, 6), 16) / 255;
  return [r, g, b];
};
const prepStops = (stops: string[]) => {
  const base = (stops && stops.length ? stops : ['#FF9FFC', '#5227FF']).slice(0, MAX_COLORS);
  if (base.length === 1) base.push(base[0]);
  while (base.length < MAX_COLORS) base.push(base[base.length - 1]);
  const arr = [];
  for (let i = 0; i < MAX_COLORS; i++) arr.push(hexToRGB(base[i]));
  const count = Math.max(2, Math.min(MAX_COLORS, stops?.length ?? 2));
  return { arr, count };
};

interface GradientBlindsProps {
  className?: string;
  dpr?: number;
  paused?: boolean;
  gradientColors?: string[];
  angle?: number;
  noise?: number;
  blindCount?: number;
  blindMinWidth?: number;
  mouseDampening?: number;
  mirrorGradient?: boolean;
  spotlightRadius?: number;
  spotlightSoftness?: number;
  spotlightOpacity?: number;
  distortAmount?: number;
  shineDirection?: 'left' | 'right';
  mixBlendMode?: CSSProperties['mixBlendMode'];
}

const GradientBlinds = ({
  className = '',
  dpr,
  paused = false,
  gradientColors = ['#FF9FFC', '#5227FF'],
  angle = 0,
  noise = 0.3,
  blindCount = 16,
  blindMinWidth = 60,
  mouseDampening = 0.15,
  mirrorGradient = false,
  spotlightRadius = 0.5,
  spotlightSoftness = 1,
  spotlightOpacity = 1,
  distortAmount = 0,
  shineDirection = 'left',
  mixBlendMode = 'lighten'
}: GradientBlindsProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const programRef = useRef<Program | null>(null);
  const meshRef = useRef<Mesh<Triangle, Program> | null>(null);
  const geometryRef = useRef<Triangle | null>(null);
  const rendererRef = useRef<Renderer | null>(null);
  const mouseTargetRef = useRef([0, 0]);
  const lastTimeRef = useRef(0);
  const firstResizeRef = useRef(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const renderer = new Renderer({
      dpr: dpr ?? (typeof window !== 'undefined' ? window.devicePixelRatio || 1 : 1),
      alpha: true,
      antialias: true
    });
    rendererRef.current = renderer;
    const gl = renderer.gl;
    const canvas = gl.canvas;

    canvas.style.width = '100%';
    canvas.style.height = '100%';
    canvas.style.display = 'block';
    container.appendChild(canvas);

    const vertex = `
attribute vec2 position;
attribute vec2 uv;
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = vec4(position, 0.0, 1.0);
}
`;

    const fragment = `
#ifdef GL_ES
precision mediump float;
#endif

uniform vec3  iResolution;
uniform vec2  iMouse;
uniform float iTime;

uniform float uAngle;
uniform float uNoise;
uniform float uBlindCount;
uniform float uSpotlightRadius;
uniform float uSpotlightSoftness;
uniform float uSpotlightOpacity;
uniform float uMirror;
uniform float uDistort;
uniform float uShineFlip;
uniform vec3  uColor0;
uniform vec3  uColor1;
uniform vec3  uColor2;
uniform vec3  uColor3;
uniform vec3  uColor4;
uniform vec3  uColor5;
uniform vec3  uColor6;
uniform vec3  uColor7;
uniform int   uColorCount;

varying vec2 vUv;

float rand(vec2 co){
  return fract(sin(dot(co, vec2(12.9898,78.233))) * 43758.5453);
}

vec2 rotate2D(vec2 p, float a){
  float c = cos(a);
  float s = sin(a);
  return mat2(c, -s, s, c) * p;
}

vec3 getGradientColor(float t){
  float tt = clamp(t, 0.0, 1.0);
  int count = uColorCount;
  if (count < 2) count = 2;
  float scaled = tt * float(count - 1);
  float seg = floor(scaled);
  float f = fract(scaled);

  if (seg < 1.0) return mix(uColor0, uColor1, f);
  if (seg < 2.0 && count > 2) return mix(uColor1, uColor2, f);
  if (seg < 3.0 && count > 3) return mix(uColor2, uColor3, f);
  if (seg < 4.0 && count > 4) return mix(uColor3, uColor4, f);
  if (seg < 5.0 && count > 5) return mix(uColor4, uColor5, f);
  if (seg < 6.0 && count > 6) return mix(uColor5, uColor6, f);
  if (seg < 7.0 && count > 7) return mix(uColor6, uColor7, f);
  if (count > 7) return uColor7;
  if (count > 6) return uColor6;
  if (count > 5) return uColor5;
  if (count > 4) return uColor4;
  if (count > 3) return uColor3;
  if (count > 2) return uColor2;
  return uColor1;
}

void mainImage( out vec4 fragColor, in vec2 fragCoord )
{
    vec2 uv0 = fragCoord.xy / iResolution.xy;

    float aspect = iResolution.x / iResolution.y;
    vec2 p = uv0 * 2.0 - 1.0;
    p.x *= aspect;

    vec2 q = rotate2D(p - vec2(0.02, -0.04), uAngle);
    float breathe = sin(iTime * 0.28 + q.y * 1.4) * 0.026 + cos(iTime * 0.18 + q.y * 2.1) * 0.018;
    q.x += breathe;
    q.y += sin(iTime * 0.16 + q.x * 2.5) * 0.018;

    if (uDistort > 0.0) {
      q.x += sin(q.y * 4.6 + iTime * 0.38) * 0.018 * uDistort;
      q.y += cos(q.x * 3.8 + iTime * 0.24) * 0.014 * uDistort;
    }

    float t = clamp((q.x + 1.05) / 2.25, 0.0, 1.0);
    if (uMirror > 0.5) {
      t = 1.0 - abs(1.0 - 2.0 * fract(t));
    }
    vec3 base = getGradientColor(t);

    float count = max(uBlindCount, 1.0);
    float period = 2.34 / count;
    float phase = (q.x + 1.17) / period;
    float cell = fract(phase);
    if (uShineFlip > 0.5) cell = 1.0 - cell;

    float blade = smoothstep(0.055, 0.13, cell) * (1.0 - smoothstep(0.57, 0.72, cell));
    float localBlade = clamp((cell - 0.08) / 0.54, 0.0, 1.0);

    float acrossMask = smoothstep(-1.22, -0.84, q.x) * (1.0 - smoothstep(1.00, 1.42, q.x));
    float lengthMask = smoothstep(-1.42, -0.84, q.y) * (1.0 - smoothstep(1.00, 1.44, q.y));
    vec2 coreP = vec2(p.x * 0.72, (p.y + 0.07) * 1.18);
    float coreGlow = exp(-dot(coreP, coreP) * 1.35);

    vec2 mouseUv = vec2(iMouse.x / iResolution.x, iMouse.y / iResolution.y);
    vec2 mouseDelta = uv0 - mouseUv;
    mouseDelta.x *= aspect * 0.58;
    float r = max(uSpotlightRadius, 1e-4);
    float hover = pow(clamp(1.0 - length(mouseDelta) / r, 0.0, 1.0), max(uSpotlightSoftness, 0.05)) * uSpotlightOpacity;

    float curtain = blade * acrossMask * lengthMask;
    float curtainLight = curtain * (0.26 + coreGlow * 1.18 + hover * 0.95);
    vec3 hotRed = mix(vec3(0.32, 0.00, 0.015), vec3(1.0, 0.02, 0.045), clamp(coreGlow + hover * 0.45, 0.0, 1.0));
    vec3 col = mix(base * 0.68, hotRed, 0.74) * curtainLight;

    float innerSheen = pow(smoothstep(0.26, 0.93, localBlade), 1.25) * curtain * (0.42 + hover * 0.55 + coreGlow * 0.48);
    col += vec3(1.0, 0.48, 0.52) * innerSheen;
    col += vec3(1.0, 0.88, 0.82) * pow(hover, 1.65) * curtain * (0.18 + 0.52 * localBlade);

    float rimLeft = exp(-pow((cell - 0.075) / 0.026, 2.0));
    float rimRight = exp(-pow((cell - 0.60) / 0.038, 2.0));
    float rim = (rimLeft * 0.36 + rimRight * 0.74) * acrossMask * lengthMask * (0.32 + coreGlow * 0.82 + hover * 0.68);
    vec3 rimColor = mix(vec3(1.0, 0.14, 0.23), vec3(0.08, 0.64, 1.0), smoothstep(0.05, 1.05, q.x));
    col += rimColor * rim;

    float redHaze = exp(-dot(vec2(q.x * 0.86, q.y * 0.58), vec2(q.x * 0.86, q.y * 0.58)) * 1.08);
    col += vec3(0.72, 0.0, 0.025) * redHaze * acrossMask * lengthMask * 0.34;

    float grain = rand(gl_FragCoord.xy + vec2(iTime * 34.0, iTime * 17.0));
    float grainMask = clamp(curtainLight + rim + redHaze * 0.42, 0.0, 1.0);
    col *= 0.83 + grain * 0.34;
    col += (grain - 0.5) * uNoise * 0.42 * grainMask;

    float vignette = 1.0 - smoothstep(0.68, 1.74, length(vec2(p.x * 0.64, p.y * 0.96)));
    col *= vignette;
    col = clamp(col, vec3(0.0), vec3(1.0));

    fragColor = vec4(col, 1.0);
}

void main() {
    vec4 color;
    mainImage(color, vUv * iResolution.xy);
    gl_FragColor = color;
}
`;

    const { arr: colorArr, count: colorCount } = prepStops(gradientColors);
    const uniforms = {
      iResolution: {
        value: [gl.drawingBufferWidth, gl.drawingBufferHeight, 1]
      },
      iMouse: { value: [0, 0] },
      iTime: { value: 0 },
      uAngle: { value: (angle * Math.PI) / 180 },
      uNoise: { value: noise },
      uBlindCount: { value: Math.max(1, blindCount) },
      uSpotlightRadius: { value: spotlightRadius },
      uSpotlightSoftness: { value: spotlightSoftness },
      uSpotlightOpacity: { value: spotlightOpacity },
      uMirror: { value: mirrorGradient ? 1 : 0 },
      uDistort: { value: distortAmount },
      uShineFlip: { value: shineDirection === 'right' ? 1 : 0 },
      uColor0: { value: colorArr[0] },
      uColor1: { value: colorArr[1] },
      uColor2: { value: colorArr[2] },
      uColor3: { value: colorArr[3] },
      uColor4: { value: colorArr[4] },
      uColor5: { value: colorArr[5] },
      uColor6: { value: colorArr[6] },
      uColor7: { value: colorArr[7] },
      uColorCount: { value: colorCount }
    };

    const program = new Program(gl, {
      vertex,
      fragment,
      uniforms
    });
    programRef.current = program;

    const geometry = new Triangle(gl);
    geometryRef.current = geometry;
    const mesh = new Mesh<Triangle, Program>(gl, { geometry, program });
    meshRef.current = mesh;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      renderer.setSize(rect.width, rect.height);
      uniforms.iResolution.value = [gl.drawingBufferWidth, gl.drawingBufferHeight, 1];

      if (blindMinWidth && blindMinWidth > 0) {
        const maxByMinWidth = Math.max(1, Math.floor(rect.width / blindMinWidth));

        const effective = blindCount ? Math.min(blindCount, maxByMinWidth) : maxByMinWidth;
        uniforms.uBlindCount.value = Math.max(1, effective);
      } else {
        uniforms.uBlindCount.value = Math.max(1, blindCount);
      }

      if (firstResizeRef.current) {
        firstResizeRef.current = false;
        const cx = gl.drawingBufferWidth / 2;
        const cy = gl.drawingBufferHeight / 2;
        uniforms.iMouse.value = [cx, cy];
        mouseTargetRef.current = [cx, cy];
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(container);

    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const scale = renderer.dpr || 1;
      const x = (e.clientX - rect.left) * scale;
      const y = (rect.height - (e.clientY - rect.top)) * scale;
      mouseTargetRef.current = [x, y];
      if (mouseDampening <= 0) {
        uniforms.iMouse.value = [x, y];
      }
    };
    window.addEventListener('pointermove', onPointerMove);

    const loop = (t: number) => {
      rafRef.current = requestAnimationFrame(loop);
      uniforms.iTime.value = t * 0.001;
      if (mouseDampening > 0) {
        if (!lastTimeRef.current) lastTimeRef.current = t;
        const dt = (t - lastTimeRef.current) / 1000;
        lastTimeRef.current = t;
        const tau = Math.max(1e-4, mouseDampening);
        let factor = 1 - Math.exp(-dt / tau);
        if (factor > 1) factor = 1;
        const target = mouseTargetRef.current;
        const cur = uniforms.iMouse.value;
        cur[0] += (target[0] - cur[0]) * factor;
        cur[1] += (target[1] - cur[1]) * factor;
      } else {
        lastTimeRef.current = t;
      }
      if (!paused && programRef.current && meshRef.current) {
        try {
          renderer.render({ scene: meshRef.current });
        } catch (e) {
          console.error(e);
        }
      }
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      window.removeEventListener('pointermove', onPointerMove);
      ro.disconnect();
      if (canvas.parentElement === container) {
        container.removeChild(canvas);
      }
      programRef.current?.remove();
      geometryRef.current?.remove();
      programRef.current = null;
      geometryRef.current = null;
      meshRef.current = null;
      rendererRef.current = null;
    };
  }, [
    dpr,
    paused,
    gradientColors,
    angle,
    noise,
    blindCount,
    blindMinWidth,
    mouseDampening,
    mirrorGradient,
    spotlightRadius,
    spotlightSoftness,
    spotlightOpacity,
    distortAmount,
    shineDirection
  ]);

  return (
    <div
      ref={containerRef}
      className={`gradient-blinds-container ${className}`}
      style={{
        ...(mixBlendMode && {
          mixBlendMode: mixBlendMode
        })
      }}
    />
  );
};

export default GradientBlinds;
