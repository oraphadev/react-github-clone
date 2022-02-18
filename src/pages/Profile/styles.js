import styled from 'styled-components';

export const Container = styled.div`
  --vertical-padding: 24px;
  --horizontal-padding: 16px;

  padding: var(--vertical-padding) var(--horizontal-padding);
  overflow: hidden;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const LeftSide = styled.div`
  padding: 0 var(--horizontal-padding);

  @media screen and (min-width: 768px) {
    width: 25%;
  }
`;

export const RightSide = styled.div`
  padding: 0 var(--horizontal-padding);

  @media screen and (min-width: 768px) {
    width: 75%;
  }
`;

export const Repositories = styled.div`
  margin-top: var(--vertical-padding);

  > h2 {
    font-size: 16px;
    font-weight: normal;
  }
  > div {
    margin-top: 8px;
    display: grid;
    grid-gap: 16px;
    grid-template-columns: 1fr;

    @media screen and (min-width: 768px) {
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: minmax(min-content, max-content);
    }
  }
`;

export const CalendarHeading = styled.span`
  font-size: 16px;
  margin: 36px 0 9px;
  display: inline-flex;
`;

export const Tab = styled.div`
  background: var(--primary);

  .content {
    display: flex;
    align-items: center;
    width: min-content;
    padding: 14px 16px;
    border-bottom: 2px solid var(--orange);

    .label {
      font-size: 14px;
      padding: 0 7px;
      font-weight: 600;
    }
    .number {
      font-size: 12px;
      background: var(--ticker);
      padding: 2px 6px;
      border-radius: 24px;
    }
  }

  .line {
    display: flex;
    width: 200vw;
    border-bottom: 1px solid var(--border);
    margin-left: -50vw;
  }

  &.mobile {
    margin-top: var(--vertical-padding);

    .content {
      margin: 0 auto;
    }

    @media screen and (min-width: 768px) {
      display: none;
    }
  }

  &.desktop {
    display: none;

    @media screen and (min-width: 768px) {
      display: unset;

      .wrapper {
        display: flex;
        margin: 0 auto;
        max-width: 1280px;

        .offset {
          width: 25%;
          margin-right: var(--horizontal-padding);
        }
      }
    }
  }
`;
