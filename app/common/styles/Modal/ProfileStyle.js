import { css } from 'styled-components';
import globalStyle from '../var';
export const ProfileStyle = css`
  .ProfilePersonalInformation, .ProfileEducationDetails, .ProfileUploadDocuments, .ProfileBankDetails, .ProfileAdditionalInformation {
    @media (max-width: ${globalStyle.small}) {
      width: 100%;
    }
    @media (min-width: ${globalStyle.small}) {
      ${globalStyle.flex};
      ${globalStyle.column};
      flex: 1;
    }
  }
  /* Drawer in Mobile */
  .profile-tab-details-mobile-wrapper {
    
  }
  .profile-tab-details-mobile-container {
    width: 100vw;
    height: 100%;
    ${globalStyle.flex};
    ${globalStyle.column};
    .DrawerHeader {
      height: 56px;
      box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
      ${globalStyle.flex};
      ${globalStyle.flexcenter};
      ${globalStyle.row};
      padding-left: 20px;
      padding-right: 20px;
      .boxLeft {
        ${globalStyle.flex};
        ${globalStyle.flexcenter};
        width: 30px;
        height: 30px;
        .BackIcon {
          path {
            fill: ${globalStyle.gray8};
          }
        }
      }
      .boxCenter {
        ${globalStyle.flex};
        flex: 1;
        font-size: 17px;
        font-weight: 500;
        color: ${globalStyle.gray8};
        padding-left: 10px;
      }
      .boxRight {
        ${globalStyle.flex};
        ${globalStyle.flexcenter};
        width: 30px;
        height: 30px;
        .CloseIcon {
          width: 20px
          height: 25px;
          path {
            fill: ${globalStyle.gray8};
          }
        }
      }
    }
    .DrawerContent {
      ${globalStyle.flex};
      flex: 1;
      padding: 20px;
      box-sizing: border-box;
      overflow-y: auto;
    }
    .DrawerFooter {
      height: 90px;
      box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.25);
      padding: 20px;
      ${globalStyle.flex};
      ${globalStyle.flexcenter};
      ${globalStyle.column};
      p {
        color: ${globalStyle.gray10}; font-size: 10px;
      }
    }
  }
  .successfullyContainer {
    ${globalStyle.flex};
    ${globalStyle.flexcenter};
    ${globalStyle.column};
    flex: 1;
    .centerText {
      max-width: 300px;
      text-align: center;
    }
  }
`;
