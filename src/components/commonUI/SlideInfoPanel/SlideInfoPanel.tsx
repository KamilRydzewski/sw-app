import styled, {keyframes} from 'styled-components'


interface ISlidePanel{
    text?: string
}

const animationSlide = keyframes`
 0%{
        transform: translateX(100%);
 }
 10%{
        transform: translateX(0);

 }
90%{
        transform: translateX(0);

 }
100%{

        transform: translateX(100%);
}
`
const PanelWrapper = styled.div`
    position: fixed;
    right: 0;
    bottom: 10%;
    animation: ${animationSlide} 5s linear;
    animation-delay: .5s;
    transform: translateX(100%);

  @media all and (max-width: ${({ theme }) => theme.bpTablet}) {
    display:none;
  }
`
const PanelInfo= styled.p`
    background: ${({theme})=> theme.yellow};
    padding: 10px;
    width: 300px;
`
const SlideInfoPanel: React.FC<ISlidePanel> = ({text = 'Wrtie your info'})=>{
    return(
    <PanelWrapper data-testid="slide-info-panel">
        <PanelInfo>{text}</PanelInfo>
    </PanelWrapper>
    

    )

}


export default SlideInfoPanel;