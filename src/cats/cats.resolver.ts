import {Resolver, Query} from "@nestjs/graphql"

@Resolver()
export class CatsResolver{
    @Query()
     hello(){
        return 'Hello Cat'
    }
}