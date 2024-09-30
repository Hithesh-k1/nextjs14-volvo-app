import { useReel } from "@volvo-cars/react-headless";
import { IconButton } from "@volvo-cars/react-icons";
import React, { useRef } from "react";

const ReelsComponent = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null);

  const { nextButtonProps, previousButtonProps } = useReel({ ref });

  return (
    <section className="no-scroll">
      <div ref={ref} className="reel gap-x-5 scrollbar-none" tabIndex={0}>
        {children}
      </div>
      <div className="flex gap-x-8 mt-24 justify-end">
        <IconButton
          variant="outlined"
          icon="chevron-back"
          {...previousButtonProps}
        />
        <IconButton
          variant="outlined"
          icon="chevron-forward"
          {...nextButtonProps}
        />
      </div>
    </section>
  );
};

export default ReelsComponent;
