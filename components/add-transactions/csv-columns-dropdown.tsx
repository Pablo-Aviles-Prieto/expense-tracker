"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  DATES_CSV_FORMAT_OPTIONS,
  URL_UPLOAD_TRANSACTION_FILE,
} from "@/utils/const";
import { format } from "date-fns";
import { useEffect } from "react";
import { useToast } from "../ui/use-toast";
import {
  UploadCSVColumnsSchema,
  uploadCSVColumnsObject,
} from "@/schemas/upload-csv-columns-schema";
import { type FilePondInitialFile } from "filepond";
import { useFetch } from "@/hooks/use-fetch";
import { TransactionBulk } from "@/types";
import { FileUp } from "lucide-react";

type CSVColumnsDropdownProps = {
  files: (Blob | FilePondInitialFile | File)[];
  options: string[];
};

export const CSVColumnsDropdown = ({
  files,
  options,
}: CSVColumnsDropdownProps) => {
  const { toast } = useToast();
  const { fetchPetition } = useFetch();
  const form = useForm<z.infer<typeof UploadCSVColumnsSchema>>({
    resolver: zodResolver(UploadCSVColumnsSchema),
  });

  useEffect(() => {
    const errFields = Object.keys(form.formState.errors);
    if (errFields.length > 0) {
      const parsedErrFields = errFields.map((field) =>
        field === "Concept"
          ? "Description"
          : field === "DateFormat"
          ? "Date Format"
          : field,
      );
      toast({
        title: "Fill all the missing fields:",
        description: parsedErrFields.join(", "),
        variant: "destructive",
      });
    }
  }, [form.formState.errors]);

  const onSubmit = async (values: z.infer<typeof UploadCSVColumnsSchema>) => {
    const formData = new FormData();
    Object.entries(values).forEach(([key, value]) => {
      formData.append(key, value);
    });
    (files as File[]).forEach((file) => {
      formData.append("files", file);
    });
    const res = await fetch(URL_UPLOAD_TRANSACTION_FILE, {
      method: "POST",
      body: formData,
    });
    const parsedRes = (await res.json()) as Partial<TransactionBulk>[];
    console.log("parsedRes", parsedRes);
  };

  return (
    <Form {...form}>
      <form
        onError={(err) => console.log("error", err)}
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <FormDescription>
          - Please <span className="font-bold">identify the columns</span> in
          your CSV for{" "}
          <span className="font-bold">Date, Description/Concept, Amount</span>,
          and <span className="font-bold">Notes</span>, and select the{" "}
          <span className="font-bold">date format</span>. This ensures your
          transactions are imported correctly.
        </FormDescription>
        <FormDescription className="mb-1">
          - When uploading <span className="font-bold">multiple files</span>,
          ensure they{" "}
          <span className="font-bold">share identical columns/headers</span>.
          The system only evaluates the last uploaded file&apos;s structure for
          import accuracy.
        </FormDescription>
        <div className="grid gap-x-4 gap-y-2 sm:grid-cols-2 lg:grid-cols-3">
          {Object.keys(uploadCSVColumnsObject).map((column) => (
            <FormField
              key={column}
              control={form.control}
              name={column}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    {column === "Concept"
                      ? "Description/Concept"
                      : column === "DateFormat"
                      ? "Date Format"
                      : column}
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue
                          placeholder={`Select your ${
                            column === "Concept"
                              ? "Description"
                              : column === "DateFormat"
                              ? "Date Format"
                              : column
                          } column`}
                        />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {column === "DateFormat"
                        ? DATES_CSV_FORMAT_OPTIONS.map((dateFormatOption) => (
                            <SelectItem
                              key={dateFormatOption}
                              value={dateFormatOption}
                            >
                              {format(new Date(), dateFormatOption)}
                            </SelectItem>
                          ))
                        : options.map((option) => (
                            <SelectItem key={option} value={option}>
                              {option}
                            </SelectItem>
                          ))}
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          ))}
        </div>
        <div className="flex w-full my-2 mt-6 sm:justify-center">
          <Button className="w-full sm:w-[200px]" type="submit">
            <FileUp className="w-5 h-5 mr-2" /> Upload transactions
          </Button>
        </div>
      </form>
    </Form>
  );
};
