'use client'
import { useEffect } from "react";
import { AdSlot } from "./ad-slots";

const AdComponent = ({ slot }: { slot: AdSlot }) => {
  useEffect(() => {
    try {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    ;((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({})    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <section className="my-8">
      {slot.format === 'fluid' && (
        <ins
          className="adsbygoogle h-[280px] min-w-[280px] w-full bg-white dark:bg-black"
          style={{ display: 'block' }}
          data-ad-client="ca-pub-3646138644530578"
          data-ad-slot={slot.slotId}
          data-ad-format="fluid"
          data-full-width-responsive="true"
        />
      )}
      {slot.format === 'auto' && (
        <ins
          className="adsbygoogle h-[280px] w-full bg-white dark:bg-black"
          data-ad-layout="in-article"
          style={{ display: 'block', textAlign: 'center' }}
          data-ad-format="fluid"
          data-ad-client="ca-pub-3646138644530578"
          data-ad-slot={slot.slotId}
        />
      )}
    </section>
  );
};

export default AdComponent;