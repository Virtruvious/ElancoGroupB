import { Request, Response } from 'express';
import { getColumns } from '../Models/columnModule'; // Corrected here

export const getAllColumns = async (req: Request, res: Response): Promise<void> => {
    try {
        const tableName = "doglog";
        const columns = await getColumns(tableName); // Corrected here
        res.status(200).json(columns);
    } catch (error) {
        console.error("Error in retrieving columns: ", error);
        res.status(500).json({ message: "Error in retrieving columns",
    error: error.message });
    }
}