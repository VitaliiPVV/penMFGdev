import { FilterOption } from "@/types";

export type SelectefFilters = Record<string, string[]>
export type SetFilters = (filter: Record<string, string[]>) => void

interface UseFilterHandler {
  handleFilterToggle: (
    selectedFilters: SelectefFilters,
    setFilters: SetFilters,
    groupId: string,
    optionId: string,
  ) => void
  handleFiltersReset: (
    filterOptions: FilterOption[],
    setFilters: SetFilters
  ) => void
  handleFilterRemove: (
    selectedFilters: SelectefFilters,
    setFilters: SetFilters,
    groupId: string,
    optionId: string,
  ) => void
  getSelectedFiltersCount: (selectedFilters: SelectefFilters) => number
}

const useFilterHandler = (): UseFilterHandler => {
  const handleFilterToggle = (
    selectedFilters: SelectefFilters,
    setFilters: SetFilters,
    groupId: string,
    optionId: string,
  ) => {
    const currentGroupFilters = selectedFilters[groupId] || [];
    const newGroupFilters = currentGroupFilters.includes(optionId)
      ? currentGroupFilters.filter((id) => id !== optionId)
      : [...currentGroupFilters, optionId];

    setFilters({
      ...selectedFilters,
      [groupId]: newGroupFilters,
    });
  }

  const handleFiltersReset = (
    filterOptions: FilterOption[],
    setFilters: SetFilters
  ) => {
    const resetFilters: Record<string, string[]> = {};

    filterOptions.forEach((group) => {
      resetFilters[group.id] = [];
    });

    setFilters(resetFilters)
  }

  const handleFilterRemove = (
    selectedFilters: SelectefFilters,
    setFilters: SetFilters,
    groupId: string,
    optionId: string,
  ) => {
    const currentGroupFilters = selectedFilters[groupId] || [];
    const newGroupFilters = currentGroupFilters.filter((id) => id !== optionId);

    setFilters({
      ...selectedFilters,
      [groupId]: newGroupFilters,
    });
  }

  const getSelectedFiltersCount = (selectedFilters: SelectefFilters): number => {
    return Object.values(selectedFilters).reduce((count, group) => count + group.length, 0);
  }

  return {
    handleFilterToggle,
    handleFiltersReset,
    handleFilterRemove,
    getSelectedFiltersCount
  }
}

export default useFilterHandler