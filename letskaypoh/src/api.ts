import axios from 'axios';
import { UserInterface, VisitInterface } from './models/interfaces';

const api = axios.create({
    baseURL: 'http://localhost:5000',
});
export const getAllUsersData = async () => {
    try {
        const response = await api.get(`/users`);
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export const getUserByIdData = async (userId: string) => {
    try {
        const response = await api.get(`/user`, { params: { id: userId } });
        return response.data;
    } catch (error) {
        console.error('Error fetching user data:', error);
        throw error;
    }
};

export const createUser = async (userData: UserInterface) => {
    try {
        const response = await axios.post('/create_user', userData);
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const getAllSeniorsData = async () => {
    try {
        const response = await axios.get('/seniors');
        return response.data;
    } catch (error) {
        console.error('Error fetching seniors:', error);
        throw error;
    }
};

export const getSeniorByIdData = async (seniorId: String) => {
    try {
        const response = await axios.get(`/senior`, { params: { id: seniorId } });
        return response.data;
    } catch (error) {
        console.error(`Error fetching senior with ID ${seniorId}:`, error);
        throw error;
    }
};

export const getAllVisitsData = async () => {
    try {
        const response = await axios.get('/visits');
        return response.data;
    } catch (error) {
        console.error('Error fetching visits:', error);
        throw error;
    }
};

export const getVisitByIdData = async (visitId: string) => {
    try {
        const response = await axios.get(`/visit`, { params: { id: visitId } });
        return response.data;
    } catch (error) {
        console.error(`Error fetching visit with ID ${visitId}:`, error);
        throw error;
    }
};

export const generateVisitId = async () => {
    try {
        const response = await axios.get('/visit_id');
        return response.data;
    } catch (error) {
        console.error('Error generating visit ID:', error);
        throw error;
    }
};

export const createVisit = async (visitData: VisitInterface) => {
    try {
        const response = await axios.post('/create_visit', visitData);
        return response.data;
    } catch (error) {
        console.error('Error creating visit:', error);
        throw error;
    }
};

export const updateVisitorInVisit = async (visitData: VisitInterface) => {
    try {
        const response = await axios.patch('/update_visit', visitData);
        return response.data;
    } catch (error) {
        console.error('Error updating visit:', error);
        throw error;
    }
};

export const updateVisitStatus = async (statusData: string) => {
    try {
        const response = await axios.patch('/update_visit_status', statusData);
        return response.data;
    } catch (error) {
        console.error('Error updating visit status:', error);
        throw error;
    }
};