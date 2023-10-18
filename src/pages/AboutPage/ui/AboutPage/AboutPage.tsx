import {FC, memo, useEffect} from "react";
import {Page} from "@/widgets/Page";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {uiActions} from "@/features/UI";
import {AboutSection} from "@/pages/AboutPage/ui/AboutSection/AboutSection.tsx";

const AboutPage: FC = memo(() => {

    const dispatch = useAppDispatch();

   useEffect(() => {
       dispatch(uiActions.setVisibleNavbarAndSidebar(false));

       return () => {
           dispatch(uiActions.setVisibleNavbarAndSidebar(true));
       }
   } ,[dispatch]);

    return <Page>
        <AboutSection/>
    </Page>

});

export default AboutPage;
