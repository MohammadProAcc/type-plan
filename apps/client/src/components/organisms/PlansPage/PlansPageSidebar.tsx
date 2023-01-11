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
import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { defaultFilters, InitialState, store, useStore } from "state";
import styled from "styled-components";
import { Color, Device } from "styles";
import { ClearSvg, Collapsible, CollapsibleTitle } from "../molecules";
import { MultiSelection } from "../molecules/atoms/MultiSelection";

export interface PlanPageProps {
  searchPane: boolean;
  toggleSearch: () => void;
}

export const PlansPageSidebar: React.FC<PlanPageProps> = (
  { searchPane, toggleSearch },
) => {
  const {
    planFilters,
  } = useStore((state: InitialState) => ({
    planFilters: state?.planFilters,
  }));

  useEffect(() => {
    searchPane && (document.body.style.overflow = "hidden");
    !searchPane && (document.body.style.overflow = "unset");
  }, [searchPane]);

  // Filtering Mechanism
  const router = useRouter();

  function applyQuery() {
    searchPane && toggleSearch();
    let query: Record<string, any> = {};

    const newPlanFilters = store.getState().planFilters;

    +(newPlanFilters.passageWidth) > 2 &&
      (query.passageWidth = newPlanFilters.passageWidth);
    +(newPlanFilters.units) > 0 && (query.units = newPlanFilters.units);
    +(newPlanFilters.floors) > 0 && (query.floors = newPlanFilters.floors);

    +(newPlanFilters.infrastructureArea[0]) > 15 &&
      +(newPlanFilters.infrastructureArea[1]) > 20 &&
      (query.infrastructureArea = newPlanFilters.infrastructureArea);

    +(newPlanFilters.width[0]) > 15 &&
      +(newPlanFilters.width[1]) > 20 &&
      (query.width = newPlanFilters.width);

    +(newPlanFilters.length[0]) > 15 &&
      +(newPlanFilters.length[1]) > 20 &&
      (query.length = planFilters.length);

    newPlanFilters.exposure && (query.exposure = newPlanFilters.exposure);
    newPlanFilters.planType && (query.planType = newPlanFilters.planType);
    newPlanFilters.plateType && (query.plateType = newPlanFilters.plateType);

    router.push({ query });
  }

  function clearQuery(filterName: string[]) {
    /* const { [filterName]: target, ...rest } = router.query; */
    let defObj = {};
    filterName.forEach((key) => defObj[key] = defaultFilters[key]);

    store.setState({
      planFilters: {
        ...store.getState().planFilters,
        ...defObj,
      },
    });

    searchPane && toggleSearch();
    applyQuery();
    /* router.push({ */
    /*   query: rest, */
    /* }); */
  }

  function checkFilterActivity(filterName: string) {
    return Object.keys(router.query).includes(filterName);
  }

  return (
    <PlansPageSidebarContainer searchPane={searchPane}>
      <PlansPageSidebarHeader>
        <PlansPageSidebarTitle>
          جستجو{" "}
        </PlansPageSidebarTitle>
        {Object.keys(router.query).length > 0 && (
          <ClearAllButton>پاک کردن همه</ClearAllButton>
        )}
        <CloseSearchBtn onClick={() => toggleSearch()}>&times;</CloseSearchBtn>
      </PlansPageSidebarHeader>

      <Collapsible title="نوع پلاک">
        <ClearButton
          onClick={() => clearQuery(["plateType"])}
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
          callback={(filter) => {
            store.setState({
              planFilters: {
                ...planFilters,
                plateType: filter.value,
              },
            });
            applyQuery();
          }}
        />
      </Collapsible>

      <Collapsible title="نوع کاربری">
        <ClearButton
          onClick={() => clearQuery(["planType"])}
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
          callback={(filter) => {
            store.setState({
              planFilters: {
                ...planFilters,
                planType: filter.value,
              },
            });
            applyQuery();
          }}
        />
      </Collapsible>

      <Collapsible title="عرض معبر">
        <ClearButton
          onClick={() => clearQuery(["passageWidth"])}
          active={checkFilterActivity("passageWidth")}
          disabled={!checkFilterActivity("passageWidth")}
        >
          <ClearSvg Color={Color.Error} />
        </ClearButton>
        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>(متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            value={planFilters.passageWidth}
            onChange={(e) =>
              store.setState({
                planFilters: {
                  ...planFilters,
                  passageWidth: e.target.value,
                },
              })}
          />
          <ApplyBtn
            onClick={() => {
              +(planFilters.passageWidth) > 2
                ? applyQuery()
                : toast.warn("لطفا برای عرض معبر عددی بزرگتر ۲ وارد کنید");
            }}
          >
            اعمال
          </ApplyBtn>
        </PlansPageSidebarInputGroup>
      </Collapsible>

      <Collapsible
        title={
          <CollapsibleTitle
            callback={() => clearQuery(["infrastructureArea"])}
            active={checkFilterActivity("infrastructureArea")}
          >
            مساحت زمین
          </CollapsibleTitle>
        }
      >
        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>از (متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            value={planFilters.infrastructureArea[0]}
            onChange={(e) =>
              store.setState({
                planFilters: {
                  ...planFilters,
                  infrastructureArea: [
                    e.target.value,
                    planFilters.infrastructureArea[1],
                  ],
                },
              })}
          />
        </PlansPageSidebarInputGroup>

        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>تا (متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            value={planFilters.infrastructureArea[1]}
            onChange={(e) =>
              store.setState({
                planFilters: {
                  ...store.getState().planFilters,
                  infrastructureArea: [
                    planFilters.infrastructureArea[0],
                    e.target.value,
                  ],
                },
              })}
          />
          <ApplyBtn
            onClick={() => {
              (
                  +(planFilters.infrastructureArea[0]) > 5 &&
                  +(planFilters.infrastructureArea[1]) > 10
                )
                ? applyQuery()
                : toast.warn(
                  "لطفا برای مساحت زمین عددری از بزرگتر از ۱۵ تا بزرگتر از ۲۰ وارد کنید",
                );
            }}
          >
            اعمال
          </ApplyBtn>
        </PlansPageSidebarInputGroup>
      </Collapsible>

      <Collapsible title="عرض زمین">
        <ClearButton
          onClick={() => clearQuery(["width"])}
          active={checkFilterActivity("width")}
          disabled={!checkFilterActivity("width")}
        >
          <ClearSvg Color={Color.Error} />
        </ClearButton>
        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>از (متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            value={planFilters.width[0]}
            onChange={(e) =>
              store.setState({
                planFilters: {
                  ...store.getState().planFilters,
                  width: [
                    e.target.value,
                    planFilters.width[1],
                  ],
                },
              })}
          />
        </PlansPageSidebarInputGroup>

        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>تا (متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            value={planFilters.width[1]}
            onChange={(e) =>
              store.setState({
                planFilters: {
                  ...planFilters,
                  width: [
                    planFilters.width[0],
                    e.target.value,
                  ],
                },
              })}
          />
          <ApplyBtn
            onClick={() => {
              (
                  +(planFilters.width[0]) > 3 &&
                  +(planFilters.width[1]) > 6
                )
                ? applyQuery()
                : toast.warn(
                  "لطفا برای مساحت زمین عددری از بزرگتر از ۱۵ تا بزرگتر از ۲۰ وارد کنید",
                );
            }}
          >
            اعمال
          </ApplyBtn>
        </PlansPageSidebarInputGroup>
      </Collapsible>

      <Collapsible title="طول زمین ">
        <ClearButton
          onClick={() => clearQuery(["length"])}
          active={checkFilterActivity("length")}
          disabled={!checkFilterActivity("length")}
        >
          <ClearSvg Color={Color.Error} />
        </ClearButton>
        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>از (متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            value={planFilters.length[0]}
            onChange={(e) =>
              store.setState({
                planFilters: {
                  ...planFilters,
                  length: [
                    e.target.value,
                    planFilters.length[1],
                  ],
                },
              })}
          />
        </PlansPageSidebarInputGroup>

        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>تا (متر)</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            value={planFilters.length[1]}
            onChange={(e) =>
              store.setState({
                planFilters: {
                  ...planFilters,
                  length: [
                    planFilters.length[0],
                    e.target.value,
                  ],
                },
              })}
          />
          <ApplyBtn
            onClick={() => {
              (
                  +(planFilters.length[0]) > 3 &&
                  +(planFilters.length[1]) > 6
                )
                ? applyQuery()
                : toast.warn(
                  "لطفا برای مساحت زمین عددری از بزرگتر از ۱۵ تا بزرگتر از ۲۰ وارد کنید",
                );
            }}
          >
            اعمال
          </ApplyBtn>
        </PlansPageSidebarInputGroup>
      </Collapsible>

      <Collapsible title="مشخصات">
        <ClearButton
          onClick={() => clearQuery(["units", "floors"])}
          active={checkFilterActivity("units")}
          disabled={!checkFilterActivity("units")}
        >
          <ClearSvg Color={Color.Error} />
        </ClearButton>
        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>تعداد واحد :</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            value={planFilters.units}
            onChange={(e) =>
              store.setState({
                planFilters: {
                  ...planFilters,
                  units: e.target.value,
                },
              })}
          />
        </PlansPageSidebarInputGroup>

        <PlansPageSidebarInputGroup col>
          <PlansPageSidebarLabel>تعداد طبقات :</PlansPageSidebarLabel>
          <PlansPageSidebarInput
            value={planFilters.floors}
            onChange={(e) =>
              store.setState({
                planFilters: {
                  ...planFilters,
                  floors: e.target.value,
                },
              })}
          />
          <ApplyBtn
            onClick={() => {
              (
                  +(planFilters.units) >= 1 ||
                  +(planFilters.floors) >= 1
                )
                ? applyQuery()
                : toast.warn(
                  "لطفا تعداد واحد یا طبقات را بیشتر از صفر قرار دهید",
                );
            }}
          >
            اعمال
          </ApplyBtn>
        </PlansPageSidebarInputGroup>
      </Collapsible>

      <Collapsible title="موقعیت زمین">
        <ClearButton
          onClick={() => clearQuery(["exposure"])}
          active={checkFilterActivity("exposure")}
          disabled={!checkFilterActivity("exposure")}
        >
          <ClearSvg Color={Color.Error} />
        </ClearButton>
        <MultiSelection
          options={exposureOptions}
          callback={(filter) => {
            store.setState({
              planFilters: {
                ...planFilters,
                exposure: filter.value,
              },
            });
            applyQuery();
          }}
        />
      </Collapsible>
    </PlansPageSidebarContainer>
  );
};

export const ApplyBtn = styled.span`

align-self: flex-end;
display:flex;
  justify-content: center;
  margin-top: 1rem;

width: 5rem;
  background-color: rgba(255, 255, 255, 0.3);
cursor: pointer;
  border-radius: 0.8rem;
border: 1px solid ${Color.LineSecondary};
line-height: 2rem;

&:hover {
border: 1px solid rgba(255, 255, 255, 0.3);;
  color: rgba(255, 255, 255, 0.3);
  background-color: ${Color.LineSecondary}
  
}
`;

export const CloseSearchBtn = styled.span`
font-size: 1.5rem;
display: inline;
width: 2rem;
height: 2rem;
  background-color: rgba(255, 255, 255, 0.3);
cursor: pointer;
  border-radius: 50%;
border: 1px solid ${Color.Line};
line-height: 2rem;
padding-right: 0.5rem;

&:hover {
border: 1px solid rgba(255, 255, 255, 0.3);;
  color: rgba(255, 255, 255, 0.3);
  background-color: ${Color.Line}
  
}

  @media (${Device.laptop}) {
  display: none;
  }
`;
