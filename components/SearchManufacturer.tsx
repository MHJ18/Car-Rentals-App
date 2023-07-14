"use client";
import { Search } from "@/types";
import React, { useState } from "react";
import { manufacturers } from "@/constants";
import { Combobox, Transition } from "@headlessui/react";
import Image from "next/image";
import { GiBowlingPin } from "react-icons/gi";
const SearchManufacturer = ({ state, setstate }: Search) => {
  const [query, setquery] = useState("");
  const filtered =
    query === ""
      ? manufacturers
      : manufacturers.filter((res) =>
          res
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/s+/g, ""))
        );
  return (
    <>
      <div className="search-manufacturer">
        <Combobox value={state} onChange={setstate}>
          <div className="relative w-full">
            <Combobox.Button className={"absolute top-[14px]"}>
              <Image
                src="/car-logo.svg"
                width={20}
                height={20}
                className="ml-4"
                alt="search button"
              />
            </Combobox.Button>
            <Combobox.Input
              className="search-manufacturer__input"
              placeholder="Volkswagen"
              displayValue={(response: string) => response}
              onChange={(e) => setquery(e.target.value)}
            />

            <Transition
              as={React.Fragment}
              enter="transition duration-100 ease-in"
              leave="transition ease-out duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              afterLeave={() => setquery("")}
            >
              <Combobox.Options>
                {filtered?.length == 0 && query !== "" ? (
                  <Combobox.Option
                    value={query}
                    className="search-manufacturer__option"
                  >
                    No Results
                  </Combobox.Option>
                ) : (
                  filtered?.map((res, ind) => {
                    return (
                      <Combobox.Option
                        key={ind}
                        value={res}
                        className={({ active }) =>
                          `relative search-manufacturer__option ${
                            active
                              ? "bg-primary-blue text-white "
                              : "text-gray-700"
                          }`
                        }
                      >
                        {({ selected, active }) => {
                          return (
                            <>
                              <span
                                className={`block truncate ${
                                  selected ? "font-medium" : "font-normal"
                                }`}
                              >
                                {res}
                              </span>
                              {selected ? (
                                <span
                                  className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                    active ? "text-white" : "text-teal-600"
                                  }`}
                                >
                                  <GiBowlingPin className="text-lg" />
                                </span>
                              ) : null}
                            </>
                          );
                        }}
                      </Combobox.Option>
                    );
                  })
                )}
              </Combobox.Options>
            </Transition>
          </div>
        </Combobox>
      </div>
    </>
  );
};

export default SearchManufacturer;
