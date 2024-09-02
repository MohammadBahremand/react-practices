import { EXAMPLES } from "../data";
import { useState } from "react";
import TabButton from "./TabButton";
import Section from "./Section";
import Tabs from "./Tabs";





export default function Examples () {
    const [selectedTopic , setSelectedTopic] = useState ()
    function handelSelect(selectedButton){
        setSelectedTopic(selectedButton)
        // console.log(selectedTopic );
        
     } 
  
     let tabContant = <p>Pleas click a Button</p>
  
     if (selectedTopic) {
      tabContant = 
      ( (<div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>)
  
      )
      
     }
    
    return (
        <Section title={"Examples"} id="examples">
          <Tabs 
          buttons={
          
            <>
            <TabButton  isSelected={selectedTopic === "components"} 
            onClick={()=>{handelSelect("components")} }> Components </TabButton>
            <TabButton  isSelected={selectedTopic === "props"}
             onClick={()=>{handelSelect("props")}}> Props </TabButton>
            <TabButton  isSelected={selectedTopic === "jsx"} 
            onClick={()=>{handelSelect("jsx")}}> Jsx </TabButton>
            <TabButton  isSelected={selectedTopic === "state"} 
            onClick={()=>{handelSelect("state")}}> State </TabButton>
            </>
          }>
            {tabContant}
          </Tabs>         
        </Section>
    )
}