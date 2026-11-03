import TaskItem from "@/components/listView/tasks/TaskItem";
import Button from "@/components/ui/Button";
import {
  CalendarClock,
  ChevronRight,
  CornerDownRight,
  Ellipsis,
  EllipsisVertical,
  GripVertical,
  MessageSquare,
  PenLine,
} from "lucide-react";
import { useState } from "react";

const ListView = () => {
  const [showSubtask, setShowSubtask] = useState(false);
  const [showSubtask1, setShowSubtask1] = useState(false);
  const [showSubtask2, setShowSubtask2] = useState(false);
  const [showTaskItem, setShowTaskItem] = useState(false);
  const [showTask2, setShowTask2] = useState(false);
  const [showStatus, setShowStatus] = useState(false);
  const [expandedTasks, setExpandedTasks] = useState<Record<string, boolean>>({});

  return (
    <div className="w-10/12 mx-auto">
      <div className="mt-1 flex flex-col bg-transparent rounded-md">
        {/* status header */}
        <div
          className={`w-full shrink-0 h-10 flex items-center gap-2 px-2 relative rounded-t-md border ${showStatus ? "bg-transparent border-b-surface-border border-t-transparent border-l-transparent border-r-transparent" : "rounded-md bg-surface border-surface-border"} transition-default`}
        >
          <Button
            variant="ghost"
            color="secondary"
            iconSize="sm"
            className="absolute -left-8 top-1/2 -translate-y-1/2 cursor-move item-1 opacity-0 hover:opacity-100"
          >
            <GripVertical />
          </Button>
          <button onClick={() => setShowStatus((prev) => !prev)}>
            <ChevronRight
              size={16}
              strokeWidth={1}
              className={`${showStatus && "rotate-90"} transition-transform duration-200`}
            />
          </button>
          <div className="flex items-center gap-2">
            <span className="font-semibold text-neutral-50">To do</span>
            <span className="text-xs bg-neutral-800 p-1 rounded-sm text-neutral-500">
              10
            </span>
          </div>
          <Button
            variant="ghost"
            color="secondary"
            iconSize="sm"
            className="ml-auto"
          >
            <EllipsisVertical />
          </Button>
        </div>
        {showStatus && (
          <div className="flex flex-col">
            <div className="flex flex-col pl-8 bg-transparent">
              <TaskItem
                setShowTaskItem={!!expandedTasks["task-1"]}
                showTaskItem={showTaskItem}
              />
              {showTaskItem && (
                <div className="flex flex-col gap-1 ml-10">
                  <div className="relative border-b bg-transparent border-surface-border has-[.item-2:hover]:[&_.item-1]:opacity-100 has-[.item-2:hover]:[&_.item-3]:opacity-100 has-[.item-3:hover]:[&_.item-1]:opacity-100 has-[.item-1:hover]:[&_.item-3]:opacity-100">
                    <Button
                      variant="ghost"
                      color="secondary"
                      iconSize="sm"
                      className="absolute -left-8 top-1 cursor-move item-1 opacity-0 hover:opacity-100"
                    >
                      <GripVertical />
                    </Button>
                    <div className="flex items-start gap-2 p-1 item-2">
                      <Button
                        variant="ghost"
                        color="secondary"
                        iconSize="sm"
                        className=""
                        onClick={() => setShowSubtask2((prev) => !prev)}
                      >
                        <ChevronRight
                          strokeWidth={1}
                          className={`${showSubtask2 ? "rotate-90" : "rotate-0"} transition-transform duration-200`}
                        />
                      </Button>
                      <div className="flex gap-2 pt-1">
                        <button className="size-4 bg-neutral-800 rounded-full border border-neutral-600"></button>
                        <div className="flex flex-col gap-1">
                          <div className="flex flex-col gap-0">
                            <h2 className="leading-4 line-clamp-2 font-medium text-neutral-50">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </h2>
                            <p className="text-xs text-neutral-500 leading-3 line-clamp-1 flex items-center gap-0.5">
                              <CornerDownRight
                                size={14}
                                strokeWidth={1}
                                className="shrink-0"
                              />
                              <span className="grow">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Debitis voluptas explicabo
                                odio itaque possimus, quasi laudantium quam
                                quaerat sequi corrupti?
                              </span>
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-14 h-4 bg-neutral-800"></div>
                            <div className="w-12 h-4 bg-neutral-800"></div>
                            <div className="w-10 h-4 bg-neutral-800"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5 absolute top-0 right-0 bg-surface p-1 rounded-md pl-1.5 pb-1.5 item-3 opacity-0 hover:opacity-100">
                      <Button variant="ghost" color="secondary" iconSize="sm">
                        <PenLine />
                      </Button>
                      <Button variant="ghost" color="secondary" iconSize="sm">
                        <CalendarClock />
                      </Button>
                      <Button variant="ghost" color="secondary" iconSize="sm">
                        <MessageSquare />
                      </Button>
                      <Button variant="ghost" color="secondary" iconSize="sm">
                        <Ellipsis />
                      </Button>
                    </div>
                  </div>
                  {showSubtask2 && (
                    <div className="flex flex-col gap-1 ml-10">
                      <div className="relative border-b bg-transparent border-surface-border has-[.item-2:hover]:[&_.item-1]:opacity-100 has-[.item-2:hover]:[&_.item-3]:opacity-100 has-[.item-3:hover]:[&_.item-1]:opacity-100 has-[.item-1:hover]:[&_.item-3]:opacity-100">
                        <Button
                          variant="ghost"
                          color="secondary"
                          iconSize="sm"
                          className="absolute -left-8 top-1 cursor-move item-1 opacity-0 hover:opacity-100"
                        >
                          <GripVertical />
                        </Button>
                        <div className="flex items-start gap-2 p-1 item-2">
                          <Button
                            variant="ghost"
                            color="secondary"
                            iconSize="sm"
                            className="-mt-1"
                            onClick={() => setShowSubtask1((prev) => !prev)}
                          >
                            <ChevronRight
                              strokeWidth={1}
                              className={`${showSubtask1 ? "rotate-90" : "rotate-0"} transition-transform duration-200`}
                            />
                          </Button>
                          <div className="flex gap-2">
                            <button className="size-4 bg-neutral-800 rounded-full border border-neutral-600"></button>
                            <div className="flex flex-col gap-1">
                              <div className="flex flex-col gap-0">
                                <h2 className="leading-4 line-clamp-2 font-medium text-neutral-50">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit.
                                </h2>
                                <p className="text-xs text-neutral-500 leading-3 line-clamp-1 flex items-center gap-0.5">
                                  <CornerDownRight
                                    size={14}
                                    strokeWidth={1}
                                    className="shrink-0"
                                  />
                                  <span className="grow">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Debitis voluptas explicabo
                                    odio itaque possimus, quasi laudantium quam
                                    quaerat sequi corrupti?
                                  </span>
                                </p>
                              </div>
                              <div className="flex items-center gap-1">
                                <div className="w-14 h-4 bg-neutral-800"></div>
                                <div className="w-12 h-4 bg-neutral-800"></div>
                                <div className="w-10 h-4 bg-neutral-800"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5 absolute top-0 right-0 bg-surface p-1 rounded-md pl-1.5 pb-1.5 item-3 opacity-0 hover:opacity-100">
                          <Button
                            variant="ghost"
                            color="secondary"
                            iconSize="sm"
                          >
                            <PenLine />
                          </Button>
                          <Button
                            variant="ghost"
                            color="secondary"
                            iconSize="sm"
                          >
                            <CalendarClock />
                          </Button>
                          <Button
                            variant="ghost"
                            color="secondary"
                            iconSize="sm"
                          >
                            <MessageSquare />
                          </Button>
                          <Button
                            variant="ghost"
                            color="secondary"
                            iconSize="sm"
                          >
                            <Ellipsis />
                          </Button>
                        </div>
                      </div>
                      {showSubtask1 && (
                        <div className="flex flex-col gap-1 ml-10">
                          <div className="relative bg-neutral-800/40 rounded-md border border-surface-border has-[.item-2:hover]:[&_.item-1]:opacity-100 has-[.item-2:hover]:[&_.item-3]:opacity-100 has-[.item-3:hover]:[&_.item-1]:opacity-100 has-[.item-1:hover]:[&_.item-3]:opacity-100">
                            <Button
                              variant="ghost"
                              color="secondary"
                              iconSize="sm"
                              className="absolute -left-8 top-1 cursor-move item-1 opacity-0 hover:opacity-100"
                            >
                              <GripVertical />
                            </Button>
                            <div className="flex items-start gap-2 p-2 item-2">
                              <Button
                                variant="ghost"
                                color="secondary"
                                iconSize="sm"
                                className="-mt-1"
                                onClick={() => setShowSubtask((prev) => !prev)}
                              >
                                <ChevronRight
                                  strokeWidth={1}
                                  className={`${showSubtask ? "rotate-90" : "rotate-0"} transition-transform duration-200`}
                                />
                              </Button>
                              <button className="size-4 bg-neutral-800 rounded-full border border-neutral-600"></button>
                              <div className="flex flex-col gap-1">
                                <div className="flex flex-col gap-0">
                                  <h1 className="leading-4 line-clamp-2 font-medium text-neutral-50">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                  </h1>
                                  <p className="text-xs text-neutral-500 leading-3 line-clamp-1 flex items-center gap-0.5">
                                    <CornerDownRight
                                      size={14}
                                      strokeWidth={1}
                                      className="shrink-0"
                                    />
                                    <span className="grow">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Debitis voluptas
                                      explicabo odio itaque possimus, quasi
                                      laudantium quam quaerat sequi corrupti?
                                    </span>
                                  </p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <div className="w-14 h-4 bg-neutral-800"></div>
                                  <div className="w-12 h-4 bg-neutral-800"></div>
                                  <div className="w-10 h-4 bg-neutral-800"></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-0.5 absolute top-0 right-0 bg-surface p-1 rounded-md pl-1.5 pb-1.5 item-3 opacity-0 hover:opacity-100">
                              <Button
                                variant="ghost"
                                color="secondary"
                                iconSize="sm"
                              >
                                <PenLine />
                              </Button>
                              <Button
                                variant="ghost"
                                color="secondary"
                                iconSize="sm"
                              >
                                <CalendarClock />
                              </Button>
                              <Button
                                variant="ghost"
                                color="secondary"
                                iconSize="sm"
                              >
                                <MessageSquare />
                              </Button>
                              <Button
                                variant="ghost"
                                color="secondary"
                                iconSize="sm"
                              >
                                <Ellipsis />
                              </Button>
                            </div>
                          </div>
                          {showSubtask && (
                            <div className="relative bg-neutral-800/40 rounded-md border border-surface-border has-[.item-2:hover]:[&_.item-1]:opacity-100 has-[.item-2:hover]:[&_.item-3]:opacity-100 has-[.item-3:hover]:[&_.item-1]:opacity-100 has-[.item-1:hover]:[&_.item-3]:opacity-100 ml-10">
                              <Button
                                variant="ghost"
                                color="secondary"
                                iconSize="sm"
                                className="absolute -left-8 top-1 cursor-move item-1 opacity-0 hover:opacity-100"
                              >
                                <GripVertical />
                              </Button>
                              <div className="flex gap-2 p-2 item-2">
                                <button className="size-4 bg-neutral-800 rounded-full border border-neutral-600"></button>
                                <div className="flex flex-col gap-1">
                                  <div className="flex flex-col gap-0">
                                    <h1 className="leading-4 line-clamp-2 font-medium text-neutral-50">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit.
                                    </h1>
                                    <p className="text-xs text-neutral-500 leading-3 line-clamp-1 flex items-center gap-0.5">
                                      <CornerDownRight
                                        size={14}
                                        strokeWidth={1}
                                        className="shrink-0"
                                      />
                                      <span className="grow">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Debitis voluptas
                                        explicabo odio itaque possimus, quasi
                                        laudantium quam quaerat sequi corrupti?
                                      </span>
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <div className="w-14 h-4 bg-neutral-800"></div>
                                    <div className="w-12 h-4 bg-neutral-800"></div>
                                    <div className="w-10 h-4 bg-neutral-800"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-0.5 absolute top-0 right-0 bg-surface p-1 rounded-md pl-1.5 pb-1.5 item-3 opacity-0 hover:opacity-100">
                                <Button
                                  variant="ghost"
                                  color="secondary"
                                  iconSize="sm"
                                >
                                  <PenLine />
                                </Button>
                                <Button
                                  variant="ghost"
                                  color="secondary"
                                  iconSize="sm"
                                >
                                  <CalendarClock />
                                </Button>
                                <Button
                                  variant="ghost"
                                  color="secondary"
                                  iconSize="sm"
                                >
                                  <MessageSquare />
                                </Button>
                                <Button
                                  variant="ghost"
                                  color="secondary"
                                  iconSize="sm"
                                >
                                  <Ellipsis />
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
            <div className="flex flex-col pl-8 bg-transparent">
              <TaskItem
                setShowTaskItem={setShowTaskItem}
                showTaskItem={showTaskItem}
              />
              {showTask2 && (
                <div className="flex flex-col gap-1 ml-10">
                  <div className="relative border-b bg-transparent border-surface-border has-[.item-2:hover]:[&_.item-1]:opacity-100 has-[.item-2:hover]:[&_.item-3]:opacity-100 has-[.item-3:hover]:[&_.item-1]:opacity-100 has-[.item-1:hover]:[&_.item-3]:opacity-100">
                    <Button
                      variant="ghost"
                      color="secondary"
                      iconSize="sm"
                      className="absolute -left-8 top-1 cursor-move item-1 opacity-0 hover:opacity-100"
                    >
                      <GripVertical />
                    </Button>
                    <div className="flex items-start gap-2 p-1 item-2">
                      <Button
                        variant="ghost"
                        color="secondary"
                        iconSize="sm"
                        className=""
                        onClick={() => setShowSubtask2((prev) => !prev)}
                      >
                        <ChevronRight
                          strokeWidth={1}
                          className={`${showSubtask2 ? "rotate-90" : "rotate-0"} transition-transform duration-200`}
                        />
                      </Button>
                      <div className="flex gap-2 pt-1">
                        <button className="size-4 bg-neutral-800 rounded-full border border-neutral-600"></button>
                        <div className="flex flex-col gap-1">
                          <div className="flex flex-col gap-0">
                            <h1 className="leading-4 line-clamp-2 font-medium text-neutral-50">
                              Lorem ipsum dolor sit amet consectetur adipisicing
                              elit.
                            </h1>
                            <p className="text-xs text-neutral-500 leading-3 line-clamp-1 flex items-center gap-0.5">
                              <CornerDownRight
                                size={14}
                                strokeWidth={1}
                                className="shrink-0"
                              />
                              <span className="grow">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit. Debitis voluptas explicabo
                                odio itaque possimus, quasi laudantium quam
                                quaerat sequi corrupti?
                              </span>
                            </p>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-14 h-4 bg-neutral-800"></div>
                            <div className="w-12 h-4 bg-neutral-800"></div>
                            <div className="w-10 h-4 bg-neutral-800"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-0.5 absolute top-0 right-0 bg-surface p-1 rounded-md pl-1.5 pb-1.5 item-3 opacity-0 hover:opacity-100">
                      <Button variant="ghost" color="secondary" iconSize="sm">
                        <PenLine />
                      </Button>
                      <Button variant="ghost" color="secondary" iconSize="sm">
                        <CalendarClock />
                      </Button>
                      <Button variant="ghost" color="secondary" iconSize="sm">
                        <MessageSquare />
                      </Button>
                      <Button variant="ghost" color="secondary" iconSize="sm">
                        <Ellipsis />
                      </Button>
                    </div>
                  </div>
                  {showSubtask2 && (
                    <div className="flex flex-col gap-1 ml-10">
                      <div className="relative bg-neutral-800/40 rounded-md border border-surface-border has-[.item-2:hover]:[&_.item-1]:opacity-100 has-[.item-2:hover]:[&_.item-3]:opacity-100 has-[.item-3:hover]:[&_.item-1]:opacity-100 has-[.item-1:hover]:[&_.item-3]:opacity-100">
                        <Button
                          variant="ghost"
                          color="secondary"
                          iconSize="sm"
                          className="absolute -left-8 top-1 cursor-move item-1 opacity-0 hover:opacity-100"
                        >
                          <GripVertical />
                        </Button>
                        <div className="flex items-start gap-2 p-2 item-2">
                          <Button
                            variant="ghost"
                            color="secondary"
                            iconSize="sm"
                            className="-mt-1"
                            onClick={() => setShowSubtask1((prev) => !prev)}
                          >
                            <ChevronRight
                              strokeWidth={1}
                              className={`${showSubtask1 ? "rotate-90" : "rotate-0"} transition-transform duration-200`}
                            />
                          </Button>
                          <button className="size-4 bg-neutral-800 rounded-full border border-neutral-600"></button>
                          <div className="flex flex-col gap-1">
                            <div className="flex flex-col gap-0">
                              <h1 className="leading-4 line-clamp-2 font-medium text-neutral-50">
                                Lorem ipsum dolor sit amet consectetur
                                adipisicing elit.
                              </h1>
                              <p className="text-xs text-neutral-500 leading-3 line-clamp-1 flex items-center gap-0.5">
                                <CornerDownRight
                                  size={14}
                                  strokeWidth={1}
                                  className="shrink-0"
                                />
                                <span className="grow">
                                  Lorem ipsum dolor sit amet consectetur
                                  adipisicing elit. Debitis voluptas explicabo
                                  odio itaque possimus, quasi laudantium quam
                                  quaerat sequi corrupti?
                                </span>
                              </p>
                            </div>
                            <div className="flex items-center gap-1">
                              <div className="w-14 h-4 bg-neutral-800"></div>
                              <div className="w-12 h-4 bg-neutral-800"></div>
                              <div className="w-10 h-4 bg-neutral-800"></div>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-0.5 absolute top-0 right-0 bg-surface p-1 rounded-md pl-1.5 pb-1.5 item-3 opacity-0 hover:opacity-100">
                          <Button
                            variant="ghost"
                            color="secondary"
                            iconSize="sm"
                          >
                            <PenLine />
                          </Button>
                          <Button
                            variant="ghost"
                            color="secondary"
                            iconSize="sm"
                          >
                            <CalendarClock />
                          </Button>
                          <Button
                            variant="ghost"
                            color="secondary"
                            iconSize="sm"
                          >
                            <MessageSquare />
                          </Button>
                          <Button
                            variant="ghost"
                            color="secondary"
                            iconSize="sm"
                          >
                            <Ellipsis />
                          </Button>
                        </div>
                      </div>
                      {showSubtask1 && (
                        <div className="flex flex-col gap-1 ml-10">
                          <div className="relative bg-neutral-800/40 rounded-md border border-surface-border has-[.item-2:hover]:[&_.item-1]:opacity-100 has-[.item-2:hover]:[&_.item-3]:opacity-100 has-[.item-3:hover]:[&_.item-1]:opacity-100 has-[.item-1:hover]:[&_.item-3]:opacity-100">
                            <Button
                              variant="ghost"
                              color="secondary"
                              iconSize="sm"
                              className="absolute -left-8 top-1 cursor-move item-1 opacity-0 hover:opacity-100"
                            >
                              <GripVertical />
                            </Button>
                            <div className="flex items-start gap-2 p-2 item-2">
                              <Button
                                variant="ghost"
                                color="secondary"
                                iconSize="sm"
                                className="-mt-1"
                                onClick={() => setShowSubtask((prev) => !prev)}
                              >
                                <ChevronRight
                                  strokeWidth={1}
                                  className={`${showSubtask ? "rotate-90" : "rotate-0"} transition-transform duration-200`}
                                />
                              </Button>
                              <button className="size-4 bg-neutral-800 rounded-full border border-neutral-600"></button>
                              <div className="flex flex-col gap-1">
                                <div className="flex flex-col gap-0">
                                  <h1 className="leading-4 line-clamp-2 font-medium text-neutral-50">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit.
                                  </h1>
                                  <p className="text-xs text-neutral-500 leading-3 line-clamp-1 flex items-center gap-0.5">
                                    <CornerDownRight
                                      size={14}
                                      strokeWidth={1}
                                      className="shrink-0"
                                    />
                                    <span className="grow">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit. Debitis voluptas
                                      explicabo odio itaque possimus, quasi
                                      laudantium quam quaerat sequi corrupti?
                                    </span>
                                  </p>
                                </div>
                                <div className="flex items-center gap-1">
                                  <div className="w-14 h-4 bg-neutral-800"></div>
                                  <div className="w-12 h-4 bg-neutral-800"></div>
                                  <div className="w-10 h-4 bg-neutral-800"></div>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-0.5 absolute top-0 right-0 bg-surface p-1 rounded-md pl-1.5 pb-1.5 item-3 opacity-0 hover:opacity-100">
                              <Button
                                variant="ghost"
                                color="secondary"
                                iconSize="sm"
                              >
                                <PenLine />
                              </Button>
                              <Button
                                variant="ghost"
                                color="secondary"
                                iconSize="sm"
                              >
                                <CalendarClock />
                              </Button>
                              <Button
                                variant="ghost"
                                color="secondary"
                                iconSize="sm"
                              >
                                <MessageSquare />
                              </Button>
                              <Button
                                variant="ghost"
                                color="secondary"
                                iconSize="sm"
                              >
                                <Ellipsis />
                              </Button>
                            </div>
                          </div>
                          {showSubtask && (
                            <div className="relative bg-neutral-800/40 rounded-md border border-surface-border has-[.item-2:hover]:[&_.item-1]:opacity-100 has-[.item-2:hover]:[&_.item-3]:opacity-100 has-[.item-3:hover]:[&_.item-1]:opacity-100 has-[.item-1:hover]:[&_.item-3]:opacity-100 ml-10">
                              <Button
                                variant="ghost"
                                color="secondary"
                                iconSize="sm"
                                className="absolute -left-8 top-1 cursor-move item-1 opacity-0 hover:opacity-100"
                              >
                                <GripVertical />
                              </Button>
                              <div className="flex gap-2 p-2 item-2">
                                <button className="size-4 bg-neutral-800 rounded-full border border-neutral-600"></button>
                                <div className="flex flex-col gap-1">
                                  <div className="flex flex-col gap-0">
                                    <h1 className="leading-4 line-clamp-2 font-medium text-neutral-50">
                                      Lorem ipsum dolor sit amet consectetur
                                      adipisicing elit.
                                    </h1>
                                    <p className="text-xs text-neutral-500 leading-3 line-clamp-1 flex items-center gap-0.5">
                                      <CornerDownRight
                                        size={14}
                                        strokeWidth={1}
                                        className="shrink-0"
                                      />
                                      <span className="grow">
                                        Lorem ipsum dolor sit amet consectetur
                                        adipisicing elit. Debitis voluptas
                                        explicabo odio itaque possimus, quasi
                                        laudantium quam quaerat sequi corrupti?
                                      </span>
                                    </p>
                                  </div>
                                  <div className="flex items-center gap-1">
                                    <div className="w-14 h-4 bg-neutral-800"></div>
                                    <div className="w-12 h-4 bg-neutral-800"></div>
                                    <div className="w-10 h-4 bg-neutral-800"></div>
                                  </div>
                                </div>
                              </div>
                              <div className="flex items-center gap-0.5 absolute top-0 right-0 bg-surface p-1 rounded-md pl-1.5 pb-1.5 item-3 opacity-0 hover:opacity-100">
                                <Button
                                  variant="ghost"
                                  color="secondary"
                                  iconSize="sm"
                                >
                                  <PenLine />
                                </Button>
                                <Button
                                  variant="ghost"
                                  color="secondary"
                                  iconSize="sm"
                                >
                                  <CalendarClock />
                                </Button>
                                <Button
                                  variant="ghost"
                                  color="secondary"
                                  iconSize="sm"
                                >
                                  <MessageSquare />
                                </Button>
                                <Button
                                  variant="ghost"
                                  color="secondary"
                                  iconSize="sm"
                                >
                                  <Ellipsis />
                                </Button>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListView;
