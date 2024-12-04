import ChildrenObj from "./Children";

export default function ParentObj(props){
  return(
    <div>
      <ChildrenObj name="João" family={props.family}/>
      <ChildrenObj name="Maria" family={props.family}/>
      <ChildrenObj {...props} name="Enzo" />
    </div>
  )
}
