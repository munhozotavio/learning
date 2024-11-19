import Title from "@/components/Title"

export default function usingTitle(){
  return(
    <div>
      <Title
        main="Log in"
        description="Or sign up"
      />

      <Title
        main="logged in"
        description="signing up"
        small={true}
      />
    </div>
  )
}
