import {
  FormEventHandler,
  MouseEventHandler,
  useEffect,
  useState,
} from 'react';
import { Box, Button, Checkbox, checkboxClasses } from '@mui/material';

import { GREY, TEXT } from '../../lib/consts/DEFAULT_THEME';

import { BodyText } from '../Text';
import FileInfo from './FileInfo';
import fetchJSON from '../../lib/fetchers/fetchJSON';
import mainAxiosInstance from '../../lib/singletons/mainAxiosInstance';

type FileEditProps = {
  filesOverview: FileOverviewMetadata[];
};

type FileToEdit = FileDetailMetadata & {
  dataIncompleteError?: unknown;
  isSelected?: boolean;
};

const FileEditForm = ({ filesOverview }: FileEditProps): JSX.Element => {
  const [filesToEdit, setFilesToEdit] = useState<FileToEdit[]>([]);

  const generateFileInfoChangeHandler = (
    fileIndex: number,
  ): FileInfoChangeHandler => (inputValues, { fileLocationIndex } = {}) => {
    if (fileLocationIndex) {
      filesToEdit[fileIndex].fileLocations[fileLocationIndex] = {
        ...filesToEdit[fileIndex].fileLocations[fileLocationIndex],
        ...inputValues,
      };
    } else {
      filesToEdit[fileIndex] = {
        ...filesToEdit[fileIndex],
        ...inputValues,
      };
    }
  };

  const editFiles: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    filesToEdit.forEach(({ fileLocations, fileName, fileType, fileUUID }) => {
      mainAxiosInstance.put(
        `/files/${fileUUID}`,
        JSON.stringify({
          fileName,
          fileType,
          fileLocations: fileLocations.map(
            ({ fileLocationUUID, isFileLocationActive }) => ({
              fileLocationUUID,
              isFileLocationActive,
            }),
          ),
        }),
        {
          headers: { 'Content-Type': 'application/json' },
        },
      );
    });
  };

  const purgeFiles: MouseEventHandler<HTMLButtonElement> = () => {
    filesToEdit
      .filter(({ isSelected }) => isSelected)
      .forEach(({ fileUUID }) => {
        mainAxiosInstance.delete(`/files/${fileUUID}`);
      });
  };

  useEffect(() => {
    Promise.all(
      filesOverview.map(async (fileOverview: FileOverviewMetadata) => {
        const fileToEdit: FileToEdit = {
          ...fileOverview,
          fileLocations: [],
        };

        try {
          const data = await fetchJSON<string[][]>(
            `${process.env.NEXT_PUBLIC_API_URL?.replace(
              '/cgi-bin',
              '/api',
            )}/files/${fileOverview.fileUUID}`,
          );

          fileToEdit.fileLocations = data.map(
            ([
              ,
              ,
              ,
              ,
              ,
              fileLocationUUID,
              fileLocationActive,
              anvilUUID,
              anvilName,
              anvilDescription,
            ]) => ({
              anvilDescription,
              anvilName,
              anvilUUID,
              fileLocationUUID,
              isFileLocationActive: parseInt(fileLocationActive, 10) === 1,
            }),
          );
        } catch (fetchError) {
          fileToEdit.dataIncompleteError = fetchError;
        }

        return fileToEdit;
      }),
    ).then((fetchedFilesDetail) => setFilesToEdit(fetchedFilesDetail));
  }, [filesOverview]);

  return (
    <form onSubmit={editFiles}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        {filesToEdit.map(
          ({ fileName, fileLocations, fileType, fileUUID }, fileIndex) => (
            <Box
              key={`file-edit-${fileUUID}`}
              sx={{
                display: 'flex',
                flexDirection: 'row',
              }}
            >
              <Checkbox
                onChange={({ target: { checked } }) => {
                  filesToEdit[fileIndex].isSelected = checked;
                }}
                sx={{
                  color: GREY,

                  [`&.${checkboxClasses.checked}`]: {
                    color: TEXT,
                  },
                }}
              />
              <FileInfo
                fileName={fileName}
                fileType={fileType}
                fileLocations={fileLocations}
                onChange={generateFileInfoChangeHandler(fileIndex)}
              />
            </Box>
          ),
        )}
        {filesToEdit.length > 0 && (
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <Button onClick={purgeFiles} sx={{ textTransform: 'none' }}>
              <BodyText text="Purge" />
            </Button>
            <Button sx={{ textTransform: 'none' }} type="submit">
              <BodyText text="Update" />
            </Button>
          </Box>
        )}
      </Box>
    </form>
  );
};

export default FileEditForm;
