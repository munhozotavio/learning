import MyList from "../../components/List"
import Item from "../../components/Item"

export default function childrenComponent(){
  return(
    <div>
      <MyList>
        <Item content="Item#01"/>
        <Item content="Item#02"/>
        <Item content="Item#03"/>
        <Item content="Item#10"/>
        <Item content="Item#11"/>
        <Item content="Item#12"/>
      </MyList>
    </div>
  )
}
