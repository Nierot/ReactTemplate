import { ScaleFade, useColorMode } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { Route, Switch, useLocation } from 'wouter';
import SidebarWithHeader from './components/SidebarWithHeader';
import Auth from './pages/auth/Auth';
import ForgotPassword from './pages/auth/ForgotPassword';
import CleaingSchedule from './pages/CleaningSchedule';
import Index from './pages/Index';
import LoadingPage from './pages/LoadingPage';
import NotFound from './pages/NotFound';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import { getUserPreferences, UserPreferences } from './utils/user';

export default function App() {
  // state
  const [loading, setLoading] = useState<boolean>(true)
  const [prefs, setPrefs]     = useState<UserPreferences>()

  // nav
  const [_, setLocation] = useLocation()

  // color
  const { colorMode, toggleColorMode } = useColorMode()

  useEffect(() => {
    const load = () => setTimeout(() => setLoading(false), 2000)

    window.account.get()
      .then(async () => {
        const prefs = await getUserPreferences()
        setPrefs(prefs)

        const d = prefs.defaultLocation

        if (d && d !== '/') setLocation(d)
      })
      .then(load)
      .catch(() => {
        setLocation('/auth')
        load()
      })
  }, [])

  const loadingPage = <LoadingPage />

  if (loading) return loadingPage

  return <ScaleFade initialScale={0.98} in={!loading}>
    <Switch>
      {/* Normal Routes */}
      <Route path="/cleaning-schedule"><SidebarWithHeader><CleaingSchedule /></SidebarWithHeader></Route>
      <Route path="/profile"><SidebarWithHeader><Profile /></SidebarWithHeader></Route>
      <Route path="/settings"><SidebarWithHeader><Settings /></SidebarWithHeader></Route>
      
      {/* Pre-auth routes */}
      <Route path="/auth/forgot-password"><ForgotPassword /></Route>
      <Route path="/auth"><Auth /></Route>

      <Route path="/"><SidebarWithHeader><Index /></SidebarWithHeader></Route>        
      <Route><SidebarWithHeader><NotFound /></SidebarWithHeader></Route>
    </Switch>
  </ScaleFade>

}