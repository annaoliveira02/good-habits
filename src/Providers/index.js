import { UserProvider } from "./user";
import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";
import { TokenProvider } from "./token";
import { AuthenticationProvider } from "./Authentication";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <AuthenticationProvider>
        <UserProvider>
          <HabitsProvider>
            <GroupsProvider>{children}</GroupsProvider>
          </HabitsProvider>
        </UserProvider>
      </AuthenticationProvider>
    </TokenProvider>
  );
};

export default Providers;
