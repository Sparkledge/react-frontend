/* 

    The DeletingMaterialPopup component is meant to be used to ask the user who wants to delete a material if he or she is sure about it

*/

import React from "react";
import {
  DeletingMaterialPopupContainer, DeleteMaterialPopupHeader,
  DeleteMaterialPopupContent, DeleteMaterialPopupButtonsContainer, DeleteMaterialPopupButton,
} from "src/styled/subpages/documentDisplayer/deletingMaterialPopup";

interface DeletingMaterialPopupInterface {
  denyingCallback: () => void,
  consentCallback: () => void
}

const DeletingMaterialPopup:React.FC<DeletingMaterialPopupInterface> = ({
  denyingCallback,
  consentCallback,
} : DeletingMaterialPopupInterface) => (
  <DeletingMaterialPopupContainer className="block-center">
    <DeleteMaterialPopupHeader className="block-center">
      Czy aby na pewno?
    </DeleteMaterialPopupHeader>
    <DeleteMaterialPopupContent className="block-center">Jeżeli usuniesz ten materiał, nie będzie już się dało go odzyskać. Czy chcesz na pewno usunąć materiał?</DeleteMaterialPopupContent>
    <DeleteMaterialPopupButtonsContainer className="block-center">
      <DeleteMaterialPopupButton className="block-center" buttonColor="rgba(200,10,10,.8)" onClick={denyingCallback}>
        Wróć
      </DeleteMaterialPopupButton>
      <DeleteMaterialPopupButton className="block-center" buttonColor="rgba(10,200,10,.8)" onClick={consentCallback}>
        Usuń
      </DeleteMaterialPopupButton>
    </DeleteMaterialPopupButtonsContainer>
  </DeletingMaterialPopupContainer>
);

export default DeletingMaterialPopup;
