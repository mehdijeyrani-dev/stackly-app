import Button from "@/components/ui/Button";
import { Plus } from "lucide-react";

const ListView = () => {
  return (
    <div className="flex flex-col gap-2 w-8/12 mx-auto mt-20">
      <div className="flex flex-wrap gap-2 w-full items-start">
        <Button variant="default" color="primary" size="extra-small">
          Button default primary
        </Button>
        <Button variant="default" color="primary" size="small">
          Button default primary
        </Button>
        <Button variant="default" color="primary" size="medium">
          Button default primary
        </Button>
        <Button variant="default" color="primary" size="large">
          Button default primary
        </Button>
        <Button variant="default" color="primary" size="extra-large">
          Button default primary
        </Button>
        <Button variant="default" color="primary" size="full-width">
          Button default primary
        </Button>
        <Button variant="default" color="primary" size="fit-content">
          Button default primary
        </Button>
        <Button variant="default" color="primary" size="icon" radius="full">
          <Plus size={20} />
        </Button>
      </div>

      <hr title="Secondary" className="shrink-0 animated-rule" />
      <div className="flex flex-wrap gap-2 w-full items-start">
        <Button variant="default" color="secondary" size="medium">
          Button default secondary
        </Button>
        <Button variant="ghost" color="secondary" size="medium">
          Button ghost secondary
        </Button>
        <Button variant="flat" color="secondary" size="medium">
          Button flat secondary
        </Button>
        <Button variant="outline" color="secondary" size="medium">
          Button outline secondary
        </Button>
        <Button variant="link" color="secondary" size="medium">
          Button link secondary
        </Button>
      </div>
      <hr className="shrink-0 animated-rule" />
      <div className="flex flex-wrap gap-2 w-full items-start">
        <Button variant="default" color="danger" size="medium">
          Button default danger
        </Button>
        <Button variant="ghost" color="danger" size="medium">
          Button ghost danger
        </Button>
        <Button variant="flat" color="danger" size="medium">
          Button flat danger
        </Button>
        <Button variant="outline" color="danger" size="medium">
          Button outline danger
        </Button>
        <Button variant="link" color="danger" size="medium">
          Button link danger
        </Button>
      </div>
    </div>
  );
};

export default ListView;
