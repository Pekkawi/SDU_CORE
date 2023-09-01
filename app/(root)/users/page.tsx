"use client";

import TitleDescription from "@/components/shared/TitleDescription";
import { LayoutGroup } from "framer-motion";
import { Checkbox } from "@/components/ui/checkbox";

import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

type Role = {
  value: string;
  label: string;
};

const roles: Role[] = [
  {
    value: "user",
    label: "User",
  },
  {
    value: "admin",
    label: "Admin",
  },
  {
    value: "staff",
    label: "Staff",
  },
  {
    value: "supervisor",
    label: "Supervisor",
  },
];

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [CompOpen, setCompOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState<Role | null>(null);

  return (
    <div className="card">
      <TitleDescription
        header="Users"
        description="Registered users tracked by the system"
      />
      <section className="mt-7 border border-gray-200 p-4 shadow-gray-300 shadow-md">
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center cursor-pointer "
        >
          <h3 className="font-medium">{/*NAME*/}Eduard Liehn</h3>
          <h3 className="font-medium">{/*EMAIL*/}edlie22@student.sdu.dk</h3>
          <motion.div
            animate={{
              rotate: isOpen ? 180 : 0,
            }}
            transition={{ duration: 0.3 }}
          >
            <BiChevronDown className="text-2xl"></BiChevronDown>
          </motion.div>
        </div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: "0px" }}
              exit={{
                height: "0px",
                opacity: 0,
                marginTop: "0px",
              }}
              animate={{ height: "auto", marginTop: "25px" }}
              transition={{ duration: 0.4 }}
              className="overflow-clip"
            >
              <div className="flex ">
                {/* FIRST SECTION */}
                <div className="flex-1  flex flex-col gap-2">
                  <div className="flex flex-col ">
                    <h4>Role</h4>

                    <Popover open={CompOpen} onOpenChange={setCompOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-[150px] justify-start"
                        >
                          {selectedRole ? (
                            <>{selectedRole.label}</>
                          ) : (
                            <>Select a Role</>
                          )}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent
                        className="p-0"
                        side="right"
                        align="start"
                      >
                        <Command>
                          <CommandInput placeholder="Change status..." />
                          <CommandList>
                            <CommandEmpty>No results found.</CommandEmpty>
                            <CommandGroup>
                              {roles.map((role) => (
                                <CommandItem
                                  key={role.value}
                                  onSelect={(value) => {
                                    setSelectedRole(
                                      roles.find(
                                        (priority) => priority.value === value
                                      ) || null
                                    );
                                    setCompOpen(false);
                                  }}
                                >
                                  {role.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="flex flex-col  ">
                    <h4>Card number</h4>
                    <p className="text-gray-400 font-extralight">378046</p>
                  </div>
                  <div className="flex flex-col">
                    <h4>Card ID</h4>
                    <p className="text-gray-400 font-extralight">5561D735</p>
                  </div>
                </div>

                {/* SECOND SECTION */}
                <div className=" flex flex-col flex-1 gap-1">
                  <div className="space-x-2 items-center">
                    <Checkbox />
                    <label
                      htmlFor="DRL"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      DRL: Drill presses
                    </label>
                  </div>
                  <div className="space-x-2 items-center">
                    <Checkbox />
                    <label
                      htmlFor="DRL"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      LAS: Laser cutters
                    </label>
                  </div>
                  <div className="space-x-2 items-center">
                    <Checkbox />
                    <label
                      htmlFor="DRL"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      SLA: Stereolithography 3D printers
                    </label>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </div>
  );
};

export default Page;
