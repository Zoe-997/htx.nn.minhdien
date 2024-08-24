import { callApi } from "@/app/apis";
import UserForm from "@/app/components/admins/users/UserForm";

// export async function generateStaticParams() {
//   const users: any = await callApi("/auth/users/all", "get");

//   console.log("users: ", users);

//   // return users.map((user: any) => ({
//   //   id: user?.id.toString(),
//   // }));
// }

// export async function generateMetadata({ params }: { params: { id: string } }) {
//   const fetchMeta = await callApi(
//     `/auth/user/${params.id}?populate=*&locale=en`,
//     "get"
//   );

//   return {
//     title: "user name",
//     description: "user name",
//     openGraph: {
//       images: [
//         LogoImage
//       ],
//     },
//   };
// }

export default async function BlogsPageDetail({
  params,
}: {
  params: { id: string };
}) {
  return (
    <>
      <UserForm userId={params.id} />
    </>
  );
}
