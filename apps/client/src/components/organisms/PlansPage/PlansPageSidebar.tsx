import {
  exposureOptions,
  planTypeOptions,
  plateTypeOptions,
  unitTypeOptions,
} from "constants/index";
import {
  ClearAllButton,
  PlansPageSidebarContainer,
  PlansPageSidebarHeader,
  PlansPageSidebarInput,
  PlansPageSidebarInputGroup,
  PlansPageSidebarLabel,
  PlansPageSidebarTitle,
} from "elements";
import { useRouter } from "next/router";
import React from "react";
import { PlanFilter } from "types";
import { Collapsible } from "../molecules";
import { MultiSelection } from "../molecules/atoms/MultiSelection";

export const PlansPageSidebar: React.FC = () => {
  // Filtering Mechanism
  const router = useRouter();
  const applyQuery = (type: PlanFilter, filter: any) => {
    router.push({
      query: {
        ...router.query,
        [type]: filter,
      },
    });
  };

  return (
    <PlansPageSidebarContainer>
      <PlansPageSidebarHeader>
        <PlansPageSidebarTitle>
          جستجو{" "}
        </PlansPageSidebarTitle>
        {Object.keys(router.query).length > 0 && (
          <ClearAllButton>پاک کردن همه</ClearAllButton>
        )}
      </PlansPageSidebarHeader>

      <Collapsible title="نوع کاربری">
        <MultiSelection
          initial={router.query.planType &&
            planTypeOptions
              ?.find((o) => o.value === (router.query.planType as string))}
          options={planTypeOptions}
          callback={(filter) => applyQuery("planType", filter.value)}
        />
      </Collapsible>

      <Collapsible title="موقعیت زمین">
        <MultiSelection
          initial={router.query.exposure &&
            exposureOptions
              ?.find((o) => o.value === (router.query.exposure as string))}
          options={exposureOptions}
          callback={(filter) => applyQuery("exposure", filter.value)}
        />
      </Collapsible>

      <Collapsible title="نوع واحد">
        <MultiSelection
          initial={router.query.unitType &&
            unitTypeOptions
              ?.find((o) => o.value === (router.query.unitType as string))}
          options={unitTypeOptions}
          callback={(filter) => applyQuery("unitType", filter.value)}
        />
      </Collapsible>

      <Collapsible title="نوع پلاک">
        <MultiSelection
          initial={router.query.plateType &&
            plateTypeOptions
              ?.find((o) => o.value === (router.query.plateType as string))}
          options={plateTypeOptions}
          callback={(filter) => applyQuery("plateType", filter.value)}
        />
      </Collapsible>

      <Collapsible title="مشخصات">
        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>تعداد واحد :</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            onChange={(e) => applyQuery("units", e.target.value)}
          />
        </PlansPageSidebarInputGroup>

        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>تعداد طبقات :</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            onChange={(e) => applyQuery("floors", e.target.value)}
          />
        </PlansPageSidebarInputGroup>

        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>تعداد خواب :</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            onChange={(e) => applyQuery("sleeps", e.target.value)}
          />
        </PlansPageSidebarInputGroup>

        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>تعداد حمام :</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            onChange={(e) => applyQuery("bathroom", e.target.value)}
          />
        </PlansPageSidebarInputGroup>
      </Collapsible>

      <Collapsible title="عرض معبر">
        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>(متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            onChange={(e) => applyQuery("passageWidth", e.target.value)}
          />
        </PlansPageSidebarInputGroup>
      </Collapsible>

      <Collapsible title="مساحت">
        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>از (متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            onChange={(e) =>
              applyQuery("infrastructureArea[0]", e.target.value)}
          />
        </PlansPageSidebarInputGroup>

        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>تا (متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            onChange={(e) =>
              applyQuery("infrastructureArea[1]", e.target.value)}
          />
        </PlansPageSidebarInputGroup>
      </Collapsible>

      <Collapsible title="طول">
        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>از (متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            onChange={(e) => applyQuery("lenght[0]", e.target.value)}
          />
        </PlansPageSidebarInputGroup>

        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>تا (متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            onChange={(e) => applyQuery("lenght[1]", e.target.value)}
          />
        </PlansPageSidebarInputGroup>
      </Collapsible>

      <Collapsible title="عرض">
        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>از (متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            onChange={(e) => applyQuery("width[0]", e.target.value)}
          />
        </PlansPageSidebarInputGroup>

        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>تا (متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            onChange={(e) => applyQuery("width[1]", e.target.value)}
          />
        </PlansPageSidebarInputGroup>
      </Collapsible>
    </PlansPageSidebarContainer>
  );
};
