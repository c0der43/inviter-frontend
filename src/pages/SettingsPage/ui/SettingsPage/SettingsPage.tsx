import {FC, memo, useEffect} from "react";
import {Page} from "@/widgets/Page";
import styles from './SettingsPage.module.scss';
import {AsyncReducersModule} from "@/shared/lib/AsyncReducersModule/AsyncReducersModule.tsx";
import {ReducerList} from "@/app/providers/StoreProvider/config/StateSchema.ts";
import {SettingsPageReducer} from "@/pages/SettingsPage/model/slices";
import {
    MotionSecurityAccountForm
} from "@/pages/SettingsPage/ui/SecurityAccountForm/SecurityAccountForm.tsx";
import {
    MotionChangeUserGeneralInformationForm
} from "@/pages/SettingsPage/ui/ChangeUserGeneralInformation/ChangeUserGeneralInformationForm.tsx";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {fetchInitUser} from "@/entities/User";
import {useSelector} from "react-redux";
import {getLastName} from "@/pages/SettingsPage/model/selectors/MainUserInfoSliceSelector/getLastName/getLastName.ts";
import {getEmail} from "@/pages/SettingsPage/model/selectors/SecurityPageSliceSelector/getEmail/getEmail.ts";
import {MotionUserCard} from "@/shared/ui/UserCard/UserCard.tsx";


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
                        <MotionUserCard
                            initial={{
                                x: -500,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 0.5
                            }}
                            lastName={'xd'}
                            email={email}
                            firstName={firstName}/>

                        <MotionSecurityAccountForm
                            initial={{
                                x: 500,
                                opacity: 0
                            }}
                            animate={{
                                x: 0,
                                opacity: 1,
                            }}
                            transition={{
                                delay: 1
                            }}
                            email={email}
                            className={styles.security}/>
                    </div>

                    <MotionChangeUserGeneralInformationForm
                        initial={{
                            y: 500,
                            opacity: 0
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                        }}
                        transition={{
                            delay: 1.5
                        }}
                        firstName={firstName}
                        className={styles.user_data}/>
                </div>
            </Page>
        </AsyncReducersModule>
    </>

});
export default SettingsPage;
