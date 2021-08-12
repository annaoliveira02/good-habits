import { UserProvider } from "./user";
import { HabitsProvider } from "./habits";
import { GroupsProvider } from "./groups";
import { TokenProvider } from "./token";

const Providers = ({ children }) => {
  return (
    <TokenProvider>
      <UserProvider>
        <HabitsProvider>
          <GroupsProvider>{children}</GroupsProvider>
        </HabitsProvider>
      </UserProvider>
    </TokenProvider>
  );
};

export default Providers;
