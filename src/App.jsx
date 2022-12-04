import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import StudentInfo from './pages/StudentInfo';
import Dashboard from './pages/Dashboard';
import StudentPage from './pages/StudentPage';
import StudentForm from './pages/StudentForm';
import TeacherPage from './pages/TeacherPage';
import CareerPage from './pages/CareerPage';
import SubjectPage from './pages/SubjectPage';

import Register from './components/Register';
import LoginPage from './pages/LoginPage';
import ProtectedRoute from './components/ProtectedRoute';
import { StudentContextProvider } from './context/StudentContext';
import { TeacherContextProvider } from './context/TeacherContext';
import { AuthContextProvider } from './context/AuthContext';
import { SubjectContextProvider } from './context/SubjectContext';
import { CareerContextProvider } from './context/CareerContext';

function App() {
	return (
		<>
			<AuthContextProvider>
				<Routes>
					<Route path='/*'>
						<Route index element={<LoginPage />} />
					</Route>
					<Route path='/login' element={<LoginPage />} />
					<Route path='/register' element={<Register />} />

					<Route element={<ProtectedRoute Context={StudentContextProvider} />}>
						<Route path='/dashboard' element={<Dashboard />} />
						<Route path='/students' element={<StudentPage />} />
						<Route path='/new' element={<StudentForm />} />
						<Route path='/edit/:id' element={<StudentForm />} />
					</Route>

					<Route element={<ProtectedRoute Context={TeacherContextProvider} />}>
						<Route path='/teachers' element={<TeacherPage />} />
					</Route>

					<Route element={<ProtectedRoute Context={SubjectContextProvider} />}>
						<Route path='/subjects' element={<SubjectPage />} />
					</Route>

					<Route element={<ProtectedRoute Context={CareerContextProvider} />}>
						<Route path='/careers' element={<CareerPage />} />
					</Route>

					<Route path='*' element={<NotFound />} />
				</Routes>
			</AuthContextProvider>
		</>
	);
}

export default App;
