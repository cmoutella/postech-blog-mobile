import { PageName, useNavigate } from "@/ui/navigation";
import { useSessionContext } from "@/ui/providers/authProvider";
import { Menu as BaseMenu, HamburgerIcon, Pressable } from "native-base";

interface MenuItemProps {
  label: string;
  pageName: PageName;
  classNames?: string;
}

function MenuItem({ label, pageName, classNames }: MenuItemProps) {
  const navigate = useNavigate();

  return (
    <BaseMenu.Item onPress={() => navigate.to(pageName)} className={classNames}>
      {label}
    </BaseMenu.Item>
  );
}

export function Menu() {
  const { logout } = useSessionContext();

  return (
    <BaseMenu
      w="190"
      trigger={(triggerProps) => {
        return (
          <Pressable accessibilityLabel="More options menu" {...triggerProps}>
            <HamburgerIcon />
          </Pressable>
        );
      }}
    >
      <MenuItem label="Home" pageName="home" />
      <MenuItem label="Meus Posts" pageName="admin" />
      <MenuItem label="Professores (TO DO)" pageName="admin" />
      <MenuItem label="Alunos (TO DO)" pageName="admin" />
      <BaseMenu.Item onPress={logout} className="bg-red-500">
        Logout
      </BaseMenu.Item>
    </BaseMenu>
  );
}