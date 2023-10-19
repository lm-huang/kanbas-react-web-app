/** @format */
import VariablesAndConstants from "./VariablesandConstants";
import VariableTypes from "./VariableTypes";
import BooleanVariables from "./BooleanVariables";
import IfElse from "./IfElse";
import TernaryOperator from "./TernaryOperator";
import WorkingWithFunctions from "./WorkingWithFunctions";
import * as wwa from "./WorkingWithArrays";
import TemplateLiterals from "./TemplateLiterals";
import PathParameters from "./Pathparameters";
function JavaScript() {
  console.log("hello world");
  return (
    <div>
      <h1>JavaScript</h1>
      <VariablesAndConstants />
      <VariableTypes />
      <BooleanVariables />
      <IfElse />
      <TernaryOperator />
      <WorkingWithFunctions />
      <wwa.WorkingWithArrays />
      <wwa.ArrayIndexAndLength />
      <wwa.AddingAndRemovingDataToFromArrays />
      <wwa.ForLoops />
      <wwa.MapFunction />
      <wwa.JsonStringify />
      <wwa.FindFunction />
      <wwa.FilterFunction />
      <TemplateLiterals />
      <PathParameters />
    </div>
  );
}
export default JavaScript;
