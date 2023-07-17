// src/hooks/useXmlData.js
import { useEffect, useState } from 'react';
import axios from 'axios';
import cheerio from 'cheerio';

const useXmlData = () => {
  const [metadata, setMetadata] = useState({});
  const [entryCount, setEntryCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('xml/manifest.xml'); // Don't change this path
        const xmlData = response.data;

        const $ = cheerio.load(xmlData, { xmlMode: true });

        // Get metadata here
        const title = $('metadata title').text();
        const authorName = $('metadata author name').text();
        const authorEmail = $('metadata author email').text();
        const description = $('metadata description').text();
        const createdAt = $('metadata created_at').text();
        const version = $('metadata version').text();
        const license = $('metadata license').text();


        /* Structure Required
        {
          title,
          author: {
            name: authorName,
            email: authorEmail,
          },
          description,
          created_at: createdAt,
          version,
          license,
        }
        */

        setMetadata({
          title,
          author: {
            name: authorName,
            email: authorEmail,
          },
          description,
          created_at: createdAt,
          version,
          license,
        });

        // Get entry count
        const entries = $('data entry');
        setEntryCount(entries.length);
      } catch (error) {
        console.error('Error fetching XML data:', error);
      }
    };
    fetchData();
  }, []);

  return { metadata, entryCount };
};

export default useXmlData;
