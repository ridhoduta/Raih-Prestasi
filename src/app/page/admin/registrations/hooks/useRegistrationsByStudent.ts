import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { getRegistrationsGroupedByStudent } from "@/app/service/guruCompetitionsAPI";

export function useRegistrationsByStudent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  // Debounce search term to prevent excessive API calls
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(searchTerm);
    }, 300);
    return () => clearTimeout(timer);
  }, [searchTerm]);

  const {
    data,
    isLoading,
    isError,
    refetch,
  } = useQuery({
    queryKey: ["registrations-by-student", debouncedSearch],
    queryFn: () => getRegistrationsGroupedByStudent(debouncedSearch),
  });

  const students = data?.success && data.data ? data.data : [];

  return {
    students,
    loading: isLoading,
    isError,
    searchTerm,
    setSearchTerm,
    refetch,
  };
}
