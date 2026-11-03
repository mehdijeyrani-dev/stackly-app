import Button from "@/components/ui/Button";
import useDocumentTitle from "@/hooks/useDocumentTitle";
import {
  Award,
  Grid,
  Kanban,
  LayerArrowDown,
  PlusCircle,
  Rocket,
} from "lucide-react";

const Notifications = () => {
  useDocumentTitle("Notifications");

  return (
    <div className="p-5 mx-auto overflow-y-auto">
      <div className="">
        <h1 className="text-xl font-semibold py-4">Variant & Color:</h1>
        <div className="flex flex-col gap-4 p-4 border w-fit border-neutral-700">
          <div className="flex items-start gap-2">
            <span className="w-40">Flat: </span>
            <Button variant="flat" color="primary">
              Button
            </Button>
            <Button variant="flat" color="secondary">
              Button
            </Button>
            <Button variant="flat" color="danger">
              Button
            </Button>
            <Button variant="flat" color="warning">
              Button
            </Button>
            <Button variant="flat" color="success">
              Button
            </Button>
            <Button variant="flat" color="info">
              Button
            </Button>
            <Button variant="flat" color="tertiary">
              Button
            </Button>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-40">Solid: </span>
            <Button variant="solid" color="primary">
              Button
            </Button>
            <Button variant="solid" color="secondary">
              Button
            </Button>
            <Button variant="solid" color="danger">
              Button
            </Button>
            <Button variant="solid" color="warning">
              Button
            </Button>
            <Button variant="solid" color="success">
              Button
            </Button>
            <Button variant="solid" color="info">
              Button
            </Button>
            <Button variant="solid" color="tertiary">
              Button
            </Button>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-40">Outline:</span>
            <Button variant="outline" color="primary">
              Button
            </Button>
            <Button variant="outline" color="secondary">
              Button
            </Button>
            <Button variant="outline" color="danger">
              Button
            </Button>
            <Button variant="outline" color="warning">
              Button
            </Button>
            <Button variant="outline" color="success">
              Button
            </Button>
            <Button variant="outline" color="info">
              Button
            </Button>
            <Button variant="outline" color="tertiary">
              Button
            </Button>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-40">Ghost:</span>
            <Button variant="ghost" color="primary">
              Button
            </Button>
            <Button variant="ghost" color="secondary">
              Button
            </Button>
            <Button variant="ghost" color="danger">
              Button
            </Button>
            <Button variant="ghost" color="warning">
              Button
            </Button>
            <Button variant="ghost" color="success">
              Button
            </Button>
            <Button variant="ghost" color="info">
              Button
            </Button>
            <Button variant="ghost" color="tertiary">
              Button
            </Button>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-40">Link:</span>
            <Button variant="link" color="primary">
              Button
            </Button>
            <Button variant="link" color="secondary">
              Button
            </Button>
            <Button variant="link" color="danger">
              Button
            </Button>
            <Button variant="link" color="warning">
              Button
            </Button>
            <Button variant="link" color="success">
              Button
            </Button>
            <Button variant="link" color="info">
              Button
            </Button>
            <Button variant="link" color="tertiary">
              Button
            </Button>
          </div>
        </div>
      </div>
      <div className="">
        <h1 className="text-xl font-semibold py-4">Size:</h1>
        <div className="flex flex-col gap-4 p-4 border w-fit border-neutral-700">
          <div className="flex items-start gap-2">
            <span className="w-40">Extra small (xs): </span>
            <Button variant="flat" color="primary" size="xs">
              <PlusCircle size={14} />
              <span className="">Button</span>
            </Button>
            <Button variant="flat" color="secondary" size="xs">
              Button
              <PlusCircle size={14} />
            </Button>
            <Button variant="flat" color="danger" size="xs">
              Button
            </Button>
            <Button variant="flat" color="warning" size="xs">
              Button
            </Button>
            <Button variant="flat" color="success" size="xs">
              Button
            </Button>
            <Button variant="flat" color="info" size="xs">
              Button
            </Button>
            <Button variant="flat" color="tertiary" size="xs">
              Button
            </Button>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-40">Small (sm): </span>
            <Button variant="solid" color="primary" size="sm">
              <PlusCircle size={16} />
              <span className="">Button</span>
            </Button>
            <Button variant="solid" color="secondary" size="sm">
              Button
              <PlusCircle size={16} />
            </Button>
            <Button variant="solid" color="danger" size="sm">
              Button
            </Button>
            <Button variant="solid" color="warning" size="sm">
              Button
            </Button>
            <Button variant="solid" color="success" size="sm">
              Button
            </Button>
            <Button variant="solid" color="info" size="sm">
              Button
            </Button>
            <Button variant="solid" color="tertiary" size="sm">
              Button
            </Button>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-40">Medium (md): </span>
            <Button variant="solid" color="primary" size="md">
              <PlusCircle size={20} />
              <span className="">Button</span>
            </Button>
            <Button variant="solid" color="secondary" size="md">
              Button
              <PlusCircle size={20} />
            </Button>
            <Button variant="solid" color="danger" size="md">
              Button
            </Button>
            <Button variant="solid" color="warning" size="md">
              Button
            </Button>
            <Button variant="solid" color="success" size="md">
              Button
            </Button>
            <Button variant="solid" color="info" size="md">
              Button
            </Button>
            <Button variant="solid" color="tertiary" size="md">
              Button
            </Button>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-40">Large (lg): </span>
            <Button variant="solid" color="primary" size="lg">
              <PlusCircle size={20} />
              <span className="">Button</span>
            </Button>
            <Button variant="solid" color="secondary" size="lg">
              Button
              <PlusCircle size={20} />
            </Button>
            <Button variant="solid" color="danger" size="lg">
              Button
            </Button>
            <Button variant="solid" color="warning" size="lg">
              Button
            </Button>
            <Button variant="solid" color="success" size="lg">
              Button
            </Button>
            <Button variant="solid" color="info" size="lg">
              Button
            </Button>
            <Button variant="solid" color="tertiary" size="lg">
              Button
            </Button>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-40">Extra large (xl): </span>
            <Button variant="solid" color="primary" size="xl">
              <PlusCircle size={24} />
              <span className="">Button</span>
            </Button>
            <Button variant="solid" color="secondary" size="xl">
              Button
              <PlusCircle size={24} />
            </Button>
            <Button variant="solid" color="danger" size="xl">
              Button
            </Button>
            <Button variant="solid" color="warning" size="xl">
              Button
            </Button>
            <Button variant="solid" color="success" size="xl">
              Button
            </Button>
            <Button variant="solid" color="info" size="xl">
              Button
            </Button>
            <Button variant="solid" color="tertiary" size="xl">
              Button
            </Button>
          </div>
          <div className="flex items-start gap-2">
            <span className="w-40">Icon: </span>
            <Button variant="solid" color="primary" size="xs" iconSize="xs">
              <Rocket />
            </Button>
            <Button variant="solid" color="secondary" size="sm" iconSize="sm">
              <Rocket />
            </Button>
            <Button variant="solid" color="danger" size="md" iconSize="md">
              <Rocket />
            </Button>
            <Button variant="solid" color="danger" size="lg" iconSize="lg">
              <Rocket />
            </Button>
            <Button variant="outline" color="success" size="lg" iconSize="xl">
              <Rocket strokeWidth={1}/>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
