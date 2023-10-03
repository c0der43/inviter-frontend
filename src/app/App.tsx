import {memo, useEffect} from 'react';
import {Sidebar} from "@/widgets/Sidebar";
import {AppRouter} from "@/app/providers/router";
import {Navbar} from "@/widgets/Navbar";
import {getNavbar, getSidebar} from "@/features/UI";
import {useSelector} from "react-redux";
import {useAppDispatch} from "@/shared/lib/hooks/useAppDispatch/useAppDispatch.ts";
import {fetchInitUser} from "@/entities/User";

const App = memo(() => {

    const dispatch = useAppDispatch();

    const showSidebar = useSelector(getSidebar);
    const showNavbar = useSelector(getNavbar);

    useEffect(() => {
        dispatch(fetchInitUser());
    }, [dispatch]);

  return (
      <div className={'app'} id={'app'}>
             {showSidebar && <Sidebar/>}
              <div className={'content'}>
                  {showNavbar && <Navbar/>}
                  <AppRouter/>
              </div>
      </div>
  )
})

export default App;
