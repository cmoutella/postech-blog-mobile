import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "@/app/screens/Home";
import Login from "@/app/screens/Login";
import Post from "@/app/screens/Post";
import Admin from "@/app/screens/AdminView";
import ListTeacherView from "@/app/screens/TeachersList";
import ListStudentView from "@/app/screens/StudentsList";
import CreateStudentView from "@/app/screens/StudentCreate";
import EditPost from "@/app/screens/PostEdit";
import CreateTeacherView from "@/app/screens/TeacherCreate";
import EditTeacher from "@/app/screens/TeacherEdit";
import EditStudent from "@/app/screens/StudentEdit";
import { useSessionContext } from "@/ui/providers/authProvider";
import CreatePostView from "@/app/screens/PostCreate";

export type RootStackParamList = {
  home: undefined;
  admin: undefined;
  teacherList: undefined;
  teacherCreate: undefined;
  teacherEdit: { teacherId: string };
  studentList: undefined;
  studentCreate: undefined;
  studentEdit: { studentId: string };
  login: undefined;
  post: { postId: string };
  postCreate: undefined;
  postUpdate: { postId: string };
};

export function AppRoutes() {
  const { Navigator, Screen } =
    createNativeStackNavigator<RootStackParamList>();

  const { isLogged } = useSessionContext();

  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="post" component={Post} />
      <Screen name="login" component={Login} />

      {/* Post Admin Views */}
      <Screen name="admin" component={Admin} />
      <Screen name="postUpdate" component={EditPost} />
      <Screen name="postCreate" component={CreatePostView} />

      {/* Teacher Views */}
      <Screen name="teacherList" component={ListTeacherView} />
      <Screen name="teacherCreate" component={CreateTeacherView} />
      <Screen name="teacherEdit" component={EditTeacher} />

      {/* Student Views */}
      <Screen name="studentList" component={ListStudentView} />
      <Screen name="studentCreate" component={CreateStudentView} />
      <Screen name="studentEdit" component={EditStudent} />
    </Navigator>
  );
}
