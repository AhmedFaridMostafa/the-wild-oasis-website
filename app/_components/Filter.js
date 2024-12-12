"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

function Filter() {
  const searchPrams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const activeFilter = searchPrams.get("capacity") ?? "all";
  function handelFilter(filter) {
    const prams = new URLSearchParams(searchPrams);
    prams.set("capacity", filter);
    router.replace(`${pathname}?${prams.toString()}`, { scroll: false });
  }

  return (
    <div className="border border-primary-800 flex w-fit ms-auto mb-8">
      <Button
        handelFilter={handelFilter}
        filter="all"
        activeFilter={activeFilter}
      >
        All cabin
      </Button>

      <Button
        handelFilter={handelFilter}
        filter="small"
        activeFilter={activeFilter}
      >
        1&mdash;3 guest
      </Button>

      <Button
        handelFilter={handelFilter}
        filter="medium"
        activeFilter={activeFilter}
      >
        4&mdash;7 guest
      </Button>

      <Button
        handelFilter={handelFilter}
        filter="large"
        activeFilter={activeFilter}
      >
        8&mdash;12 guest
      </Button>
    </div>
  );
}

function Button({ activeFilter, filter, handelFilter, children }) {
  return (
    <button
      className={`${
        activeFilter === filter ? "bg-primary-700 text-primary-50 " : ""
      } px-5 py-2 hover:bg-primary-700`}
      onClick={() => handelFilter(filter)}
    >
      {children}
    </button>
  );
}

export default Filter;
