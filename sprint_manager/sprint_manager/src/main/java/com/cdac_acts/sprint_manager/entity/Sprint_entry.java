package com.cdac_acts.sprint_manager.entity;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table
public class Sprint_entry extends Sprint{
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	int entry_id;

	@Column(name = "Developer_name")
	String Developer_name;
	
	@Column(name = "Task")
	String Task; 
	
	@Column(name = "Priority")
	int Priority;
	
	@Column(name = "Deadline")
	LocalDate Deadline;
}
