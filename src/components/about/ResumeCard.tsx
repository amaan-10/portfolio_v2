import Link from "next/link";
import React, { useEffect, useRef } from "react";
import gsap, { Elastic } from "gsap";

const ResumeCard = () => {
  // const openResume = () => {
  //   window.open("/amaan-resume.pdf", "_blank", "noopener,noreferrer");
  // };

  const buttonRef = useRef<HTMLAnchorElement>(null);

  const getPath = (
    update: number,
    smoothing: number,
    pointsNew: [number, number][] | null,
  ) => {
    const points = pointsNew || [
      [4, 12],
      [12, update],
      [20, 12],
    ];
    const d = points.reduce(
      (acc, point, i, a) =>
        i === 0
          ? `M ${point[0]},${point[1]}`
          : `${acc} ${getPoint(point, i, a, smoothing)}`,
      "",
    );
    return `<path d="${d}" />`;
  };

  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const duration = 3000;
    const svg = button.querySelector("svg");
    type SvgPathType = { y: number | null; smoothing: number | null };
    const svgPath = new Proxy<SvgPathType>(
      {
        y: null,
        smoothing: null,
      },
      {
        set(target, key: keyof SvgPathType, value: number | null) {
          target[key] = value;
          if (target.y !== null && target.smoothing !== null) {
            if (svg) {
              svg.innerHTML = getPath(target.y, target.smoothing, null);
            }
          }
          return true;
        },
        get(target, key: keyof SvgPathType) {
          return target[key];
        },
      },
    );

    button.style.setProperty("--duration", duration.toString());

    svgPath.y = 20;
    svgPath.smoothing = 0;

    const handleClick = (e: MouseEvent) => {
      e.preventDefault();

      if (!button.classList.contains("loading")) {
        button.classList.add("loading");

        gsap.to(svgPath, {
          smoothing: 0.3,
          duration: (duration * 0.065) / 1000,
        });

        gsap.to(svgPath, {
          y: 12,
          duration: (duration * 0.265) / 1000,
          delay: (duration * 0.065) / 1000,
          ease: Elastic.easeOut.config(1.12, 0.4),
        });

        setTimeout(() => {
          if (svg) {
            svg.innerHTML = getPath(0, 0, [
              [3, 14],
              [8, 19],
              [21, 6],
            ]);
          }
          setTimeout(() => {
            window.open("/amaan-resume.pdf", "_blank", "noopener,noreferrer");
          }, 500);
        }, 1000);
      }
    };

    button.addEventListener("click", handleClick);

    return () => {
      button.removeEventListener("click", handleClick);
    };
  }, []);

  const getPoint = (
    point: [number, number],
    i: number,
    a: [number, number][],
    smoothing: number,
  ) => {
    const cp = (
      current: [number, number],
      previous: [number, number] | undefined,
      next: [number, number] | undefined,
      reverse: boolean,
    ) => {
      const p = previous || current;
      const n = next || current;
      const o = {
        length: Math.sqrt(Math.pow(n[0] - p[0], 2) + Math.pow(n[1] - p[1], 2)),
        angle: Math.atan2(n[1] - p[1], n[0] - p[0]),
      };
      const angle = o.angle + (reverse ? Math.PI : 0);
      const length = o.length * smoothing;
      return [
        current[0] + Math.cos(angle) * length,
        current[1] + Math.sin(angle) * length,
      ];
    };

    const cps = cp(a[i - 1], a[i - 2], point, false);
    const cpe = cp(point, a[i - 1], a[i + 1], true);
    return `C ${cps[0]},${cps[1]} ${cpe[0]},${cpe[1]} ${point[0]},${point[1]}`;
  };

  return (
    <>
      <Link
        // onClick={openResume}
        ref={buttonRef}
        href="/amaan-resume.pdf"
        // download="amaan-resume.pdf"
        target="_blank"
        className="button dark font-gothicWide font-medium"
      >
        <ul>
          <li>&#68;OWNLOAD CV</li>
          <li>&#68;OWNLOADING CV</li>
          <li>OPEN FILE</li>
        </ul>
        <div>
          <svg
            // ref={svgRef}
            // dangerouslySetInnerHTML={{
            //   __html: getPath(svgPath.y, svgPath.smoothing, null),
            // }}
            viewBox="0 0 24 24"
          ></svg>
        </div>
      </Link>
    </>
  );
};

export default ResumeCard;
