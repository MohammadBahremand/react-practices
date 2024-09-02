export default function Tabs({children , buttons , ButtonContainer = "menu"}){
//    const ButtonsContainer = buttonContainer
   return  <>
    <ButtonContainer>
   {buttons}
    </ButtonContainer>
    {children}
    </>
}