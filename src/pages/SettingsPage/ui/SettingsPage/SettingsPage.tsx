import {FC, memo, useEffect} from "react";
import {Page} from "@/widgets/Page";
import {UserCard} from "@/shared/ui/UserCard";
import styles from './SettingsPage.module.scss';
import {AsyncReducersModule} from "@/shared/lib/AsyncReducersModule/AsyncReducersModule.tsx";
import {ReducerList} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {SettingsPageReducer} from "@/pages/SettingsPage/model/slices";
import {SecurityAccountForm} from "@/pages/SettingsPage/ui/SecurityAccountForm/SecurityAccountForm.tsx";
import {
    ChangeUserGeneralInformationForm
} from "@/pages/SettingsPage/ui/ChangeUserGeneralInformation/ChangeUserGeneralInformationForm.tsx";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {fetchInitUser} from "@/entities/User";
import {useSelector} from "react-redux";
import {getLastName} from "@/pages/SettingsPage/model/selectors/MainUserInfoSliceSelector/getLastName/getLastName.ts";
import {getEmail} from "@/pages/SettingsPage/model/selectors/SecurityPageSliceSelector/getEmail/getEmail.ts";


const reducersList: ReducerList = {
    settingsPage: SettingsPageReducer
}

const SettingsPage: FC = memo(() => {

    const dispatch = useAppDispatch();

    const firstName = useSelector(getLastName);
    const email = useSelector(getEmail);

    useEffect(() => {
        dispatch(fetchInitUser());
    }, [dispatch]);

    return <>
        <AsyncReducersModule reducers={reducersList}>
            <Page>
                <div className={styles.SettingsPage}>
                    <div className={styles.header_container}>
                        <UserCard
                            lastName={'xd'}
                            email={email}
                            firstName={firstName}/>

                        <SecurityAccountForm
                            email={email}
                            className={styles.security}/>
                    </div>

                    <ChangeUserGeneralInformationForm
                        firstName={firstName}
                        className={styles.user_data}/>
                </div>
            </Page>
        </AsyncReducersModule>
    </>

});
export default SettingsPage;
