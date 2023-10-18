import {rtkApi} from "@/shared/api/rtkApi.ts";

const settingsAccountApi = rtkApi.injectEndpoints({
   endpoints: (build) => ({
       addUserAvatar: build.mutation<void, File>({
           query: (file) => {
               const bodyFormData = new FormData();
               bodyFormData.append('file', file);

               return {
                   method: 'POST',
                   headers: {
                       'Content-Type': 'multipart/form-data',
                       'Accept': 'application/json'
                   },
                   url: '/profile-avatar/add',
                   body: bodyFormData,
                   formData: true
               }
           }
       })
   })
});

export const {useAddUserAvatarMutation} = settingsAccountApi;
