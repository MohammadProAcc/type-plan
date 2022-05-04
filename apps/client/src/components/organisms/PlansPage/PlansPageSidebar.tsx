import React, { useState } from "react";
import { PlansPageSidebarContainer, PlansPageSidebarTitle } from "elements";
import { Collapsible } from "../molecules";
import { MultiSelection } from "../molecules/atoms/MultiSelection";
import { useRouter } from "next/router";
import { PlanFilter } from "types";
import {
  planTypeOptions,
  plateTypeOptions,
  unitTypeOptions,
  exposureOptions
} from "constants/index";

export const PlansPageSidebar: React.FC = () => {

  // Filtering Mechanism
  const router = useRouter();
  const [query, setQuery] = useState(router.query);
  const applyQuery = (type: PlanFilter, filter: any) => {
    router.push({
      query: {
        ...router.query,
        [type]: filter
      }
    })
  }

  return (
    <PlansPageSidebarContainer>
      <PlansPageSidebarTitle>جستجو</PlansPageSidebarTitle>

      <Collapsible title="نوع کاربری">
        <MultiSelection
          initial={query.planType &&
            planTypeOptions
              ?.find(o => o.value === (query.planType as string))
          }
          options={planTypeOptions}
          callback={(filter) =>
            applyQuery("planType", filter.value)}
        />
      </Collapsible>

      <Collapsible title="موقعیت زمین">
        <MultiSelection
          initial={query.exposure &&
            exposureOptions
              ?.find(o => o.value === (query.exposure as string))
          }
          options={exposureOptions}
          callback={(filter) =>
            applyQuery("exposure", filter.value)}
        />
      </Collapsible>

      <Collapsible title="نوع واحد">
        <MultiSelection
          initial={query.unitType &&
            unitTypeOptions
              ?.find(o => o.value === (query.unitType as string))
          }
          options={unitTypeOptions}
          callback={(filter) =>
            applyQuery("unitType", filter.value)}
        />
      </Collapsible>

      <Collapsible title="نوع پلاک">
        <MultiSelection
          initial={query.plateType &&
            plateTypeOptions
              ?.find(o => o.value === (query.plateType as string))
          }
          options={plateTypeOptions}
          callback={(filter) =>
            applyQuery("plateType", filter.value)}
        />
      </Collapsible>

    </PlansPageSidebarContainer>
  );
};
