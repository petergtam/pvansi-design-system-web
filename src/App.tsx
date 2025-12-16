import {
  Body,
  Body2,
  Caption,
  Colors,
  Headline,
  LargeTitle,
  LargeTitle2,
  SubHeadline,
  SubHeadline2,
  Title,
  Title2,
  Title3,
} from "pvansi-design-system-example";
import './App.css'

function App() {
  return (
    <div>
      <LargeTitle2 style={{color: Colors.horizonBlue}}>Large Title 2</LargeTitle2>
      <LargeTitle style={{color: Colors.clearSkies}}>Large Title</LargeTitle>
      <Title style={{color: Colors.clearWords, backgroundColor: Colors.horizonBlue}}>Title</Title>
      <Title2 style={{color: Colors.deepSea}}>Title 2</Title2>
      <Title3 style={{color: Colors.duskNavy}}>Title 3</Title3>
      <Headline style={{color: Colors.gentleSky}}>Headline</Headline>
      <SubHeadline>SubHeadline</SubHeadline>
      <SubHeadline2>SubHeadline 2</SubHeadline2>
      <Body>Body</Body>
      <Body2>Body</Body2>
      <Caption style={{color: Colors.oceanicSlate}}>Caption</Caption>
    </div>
  );
}

export default App;
