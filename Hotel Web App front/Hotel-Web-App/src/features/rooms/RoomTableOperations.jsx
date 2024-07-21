import React from "react";

import TableOperations from "../../ui/TableOperations";
import Filter from "../../ui/Filter";
import SortBy from "../../ui/SortBy";
function RoomTableOperations() {
  return (
    <div>
      <TableOperations>
        <Filter
          filterField="type_of_room"
          options={[
            { value: "all", label: "All" },
            { value: "MINI-HOTEL", label: "Mini-hotel" },
            { value: "HOSTEL", label: "Hostel" },
          ]}
        />
        <SortBy
          options={[
            { value: "name-asc", label: "Sort by name (A-Z)" },
            { value: "name-desc", label: "Sort by name (Z-A)" },
            { value: "price-asc", label: "Sort price (low first)" },
            { value: "price-desc", label: "Sort price (high first)" },
            { value: "maxCapacity-asc", label: "Sort capacity (low first)" },
            { value: "maxCapacity-desc", label: "Sort capacity (high first)" },
          ]}
        />
      </TableOperations>
    </div>
  );
}

export default RoomTableOperations;
