"use client";
import { cn } from "@/utils/cn";
import { IconLayoutNavbarCollapse } from "@tabler/icons-react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useScroll,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import { useRef, useState, useEffect } from "react";

export const FloatingDock = ({ items, desktopClassName, mobileClassName }) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const current = scrollYProgress.get();
      const previous = scrollYProgress.getPrevious();

      if (current < 0.05) {
        setVisible(false);
      } else {
        let direction = current - previous;
        setVisible(direction > 0);
      }
    };

    scrollYProgress.onChange(handleScroll);

    return () => {
      scrollYProgress.clearListeners(); // Cleanup listeners on unmount
    };
  }, [scrollYProgress]);

  return (
    <div className="w-[max-content] mx-auto sticky bottom-0 md:bottom-auto md:top-[55px] z-[100] ">
      <FloatingDockDesktop items={items} className={desktopClassName} visible={visible} />
      <FloatingDockMobile items={items} className={mobileClassName}  />
    </div>
  );
};

const FloatingDockMobile = ({ items, className, visible }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn(" fixed block bottom-7 right-7 md:hidden", className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            
            className="absolute bottom-full mb-2 inset-x-0 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <Link
                  href={item.href}
                  key={item.title}
                  className="h-10 w-10 rounded-full bg-white text-emerald-600 flex items-center justify-center"
                >
                  <div className="">{item.icon}</div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="h-10 w-10 rounded-full bg-white text-emerald-600 flex items-center justify-center"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-emerald-500" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({ items, className, visible }) => {
  let mouseX = useMotionValue(Infinity);
  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "mx-auto hidden md:flex h-16 gap-4 items-end rounded-2xl bg-white text-emerald-600 px-4 pb-3 sticky top-0",
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} />
      ))}
    </motion.div>
  );
};

function IconContainer({ mouseX, title, icon, href }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  let widthTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [40, 80, 40]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [20, 40, 20]);

  let width = useSpring(widthTransform, { mass: 0.1, stiffness: 150, damping: 12 });
  let height = useSpring(heightTransform, { mass: 0.1, stiffness: 150, damping: 12 });

  let widthIcon = useSpring(widthTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });
  let heightIcon = useSpring(heightTransformIcon, { mass: 0.1, stiffness: 150, damping: 12 });

  const [hovered, setHovered] = useState(false);

  return (
    <Link href={href}>
      <motion.div
        ref={ref}
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="aspect-square rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center relative"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: "-50%" }}
              animate={{ opacity: 1, y: 0, x: "-50%" }}
              exit={{ opacity: 0, y: 2, x: "-50%" }}
              className="px-2 py-0.5 whitespace-pre rounded-md bg-white text-emerald-700 border border-emerald-200 absolute left-1/2 -translate-x-1/2 -top-8 w-fit text-xs"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Link>
  );
}
