import {
  exposureOptions,
  planTypeOptions,
  plateTypeOptions,
} from "constants/index";
import {
  ClearAllButton,
  ClearButton,
  PlansPageSidebarContainer,
  PlansPageSidebarHeader,
  PlansPageSidebarInput,
  PlansPageSidebarInputGroup,
  PlansPageSidebarLabel,
  PlansPageSidebarTitle,
} from "elements";
import { useRouter } from "next/router";
import React from "react";
import { Color } from "styles";
import { PlanFilter } from "types";
import { ClearSvg, Collapsible, CollapsibleTitle } from "../molecules";
import { MultiSelection } from "../molecules/atoms/MultiSelection";

export const PlansPageSidebar: React.FC = () => {
  // Filtering Mechanism
  const router = useRouter();

  function applyQuery(type: PlanFilter, filter: any) {
    router.push({
      query: {
        ...router.query,
        [type]: filter,
      },
    });
  }

  function clearQuery(filterName: string) {
    const { [filterName]: target, ...rest } = router.query;
    router.push({
      query: rest,
    });
  }

  function checkFilterActivity(filterName: string) {
    return Object.keys(router.query).includes(filterName);
  }

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

      <Collapsible title="نوع پلاک">
        <ClearButton
          onClick={() => clearQuery("plateType")}
          active={checkFilterActivity("plateType")}
          disabled={!checkFilterActivity("plateType")}
        >
          <ClearSvg Color={Color.Error} />
        </ClearButton>
        <MultiSelection
          initial={router.query.plateType &&
            plateTypeOptions
              ?.find((o) => o.value === (router.query.plateType as string))}
          options={plateTypeOptions}
          callback={(filter) => applyQuery("plateType", filter.value)}
        />
      </Collapsible>

      <Collapsible title="نوع کاربری">
        <ClearButton
          onClick={() => clearQuery("planType")}
          active={checkFilterActivity("planType")}
          disabled={!checkFilterActivity("planType")}
        >
          <ClearSvg Color={Color.Error} />
        </ClearButton>
        <MultiSelection
          initial={router.query.planType &&
            planTypeOptions
              ?.find((o) => o.value === (router.query.planType as string))}
          options={planTypeOptions}
          callback={(filter) => applyQuery("planType", filter.value)}
        />
      </Collapsible>

      <Collapsible title="عرض معبر">
        <ClearButton
          onClick={() => clearQuery("passageWidth")}
          active={checkFilterActivity("passageWidth")}
          disabled={!checkFilterActivity("passageWidth")}
        >
          <ClearSvg Color={Color.Error} />
        </ClearButton>
        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>(متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            onChange={(e) => applyQuery("passageWidth", e.target.value)}
          />
        </PlansPageSidebarInputGroup>
      </Collapsible>

      <Collapsible
        title={
          <CollapsibleTitle
            callback={() => clearQuery("infrastructureArea")}
            active={checkFilterActivity("infrastructureArea")}
          >
            مساحت زمین
          </CollapsibleTitle>
        }
      >
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
            onChange={(e) => {
              applyQuery("infrastructureArea[1]", e.target.value);
            }}
          />
        </PlansPageSidebarInputGroup>
      </Collapsible>

      <Collapsible title="عرض زمین">
        <ClearButton
          onClick={() => clearQuery("width")}
          active={checkFilterActivity("width")}
          disabled={!checkFilterActivity("width")}
        >
          <ClearSvg Color={Color.Error} />
        </ClearButton>
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

      <Collapsible title="طول زمین ">
        <ClearButton
          onClick={() => clearQuery("length")}
          active={checkFilterActivity("length")}
          disabled={!checkFilterActivity("length")}
        >
          <ClearSvg Color={Color.Error} />
        </ClearButton>
        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>از (متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            onChange={(e) => applyQuery("length[0]", e.target.value)}
          />
        </PlansPageSidebarInputGroup>

        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>تا (متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            onChange={(e) => applyQuery("length[1]", e.target.value)}
          />
        </PlansPageSidebarInputGroup>
      </Collapsible>

      <Collapsible title="مشخصات">
        <ClearButton
          onClick={() => clearQuery("units")}
          active={checkFilterActivity("units")}
          disabled={!checkFilterActivity("units")}
        >
          <ClearSvg Color={Color.Error} />
        </ClearButton>
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
      </Collapsible>

      <Collapsible title="موقعیت زمین">
        <ClearButton
          onClick={() => clearQuery("exposure")}
          active={checkFilterActivity("exposure")}
          disabled={!checkFilterActivity("exposure")}
        >
          <ClearSvg Color={Color.Error} />
        </ClearButton>
        <MultiSelection
          initial={router.query.exposure &&
            exposureOptions
              ?.find((o) => o.value === (router.query.exposure as string))}
          options={exposureOptions}
          callback={(filter) => applyQuery("exposure", filter.value)}
        />
      </Collapsible>
    </PlansPageSidebarContainer>
  );
};
