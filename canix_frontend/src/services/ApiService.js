import axios from 'axios';
import { toast } from 'sonner';

const PRODUCT_URI = `${process.env.REACT_APP_API_BASE_URL}/products`;

const ApiService = {

  uploadData: async (files) => {
    const formData = new FormData();

    for (let i = 0; i < files.length; i++) {
      formData.append('files[]', files[i]);
    }

    try {
      const response = await axios.post(
        PRODUCT_URI,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );

      if (response.data.status === 'Partial Success') {
        toast.warning(response.data.message);
      } else {
        toast.success(response.data.message);
      }
      return response.data;
    } catch (error) {
      toast.error('Error uploading file');
    }
  },

  getProductList: async () => {
    try {
      const response = await axios.get(PRODUCT_URI);
      return response.data;
    } catch (error) {
      toast.error('Error Getting Product List');
      return [];
    }
  },
};

export default ApiService;
