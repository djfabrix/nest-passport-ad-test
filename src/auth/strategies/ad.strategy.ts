import {Strategy} from "passport-activedirectory";
import {AuthService} from "../auth.service";
import {PassportStrategy} from '@nestjs/passport';
import {Injectable} from "@nestjs/common";

@Injectable()
export class AdStrategy extends PassportStrategy(Strategy, 'activedirectory') {

    constructor(private readonly authService: AuthService) {
        super({
            integrated: false,
            ldap: {
                url: 'ldap://my.domain.com',
                baseDN: 'DC=my,DC=domain,DC=com',
                username: 'readuser@my.domain.com',
                password: 'readuserspassword'
            }
        });
    }

    async validate(profile, ad): Promise<any> {

        console.log(profile);
        console.log(ad);

        /*
        const user = this.authService.validateUser(username, password);
        if (!user) {
            throw new UnauthorizedException();
        }
        return user;
        */
    }
}
