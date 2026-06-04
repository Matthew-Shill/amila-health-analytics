import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";

type SeeMoreButtonProps = {
  onClick: () => void;
  ariaControls?: string;
  ariaExpanded?: boolean;
  label?: string;
};

export function SeeMoreButton({
  onClick,
  ariaControls,
  ariaExpanded = false,
  label = "See More",
}: SeeMoreButtonProps) {
  return (
    <Reveal>
      <div className="relative z-10 mt-10 flex justify-center">
        <Button
          variant="secondary"
          onClick={onClick}
          aria-expanded={ariaExpanded}
          aria-controls={ariaControls}
        >
          {label}
        </Button>
      </div>
    </Reveal>
  );
}
