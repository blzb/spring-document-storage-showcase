package hello;

import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/**
 * Created by blzb on 10/28/15.
 */
public class FileUploadForm {

    public List<MultipartFile> getFiles() {
        return files;
    }

    public void setFiles(List<MultipartFile> files) {
        this.files = files;
    }

    private List<MultipartFile> files;

    //Getter and setter methods
}
