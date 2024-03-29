﻿using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace empire_of_ages.Models
{
    public partial class EmpireOfAgesContext : DbContext
    {
        public EmpireOfAgesContext()
        {
        }

        public EmpireOfAgesContext(DbContextOptions<EmpireOfAgesContext> options)
            : base(options)
        {
        }

        public virtual DbSet<ClassWarrior> ClassWarriors { get; set; }
        public virtual DbSet<Nation> Nations { get; set; }
        public virtual DbSet<News> News { get; set; }
        public virtual DbSet<User> Users { get; set; }
        public virtual DbSet<Warrior> Warriors { get; set; }
        public virtual DbSet<WarriorClass> WarriorClasses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                //optionsBuilder.UseSqlServer("Data Source = DESKTOP-MFNAUQT\\SQLEXPRESS;Integrated Security=true;Initial Catalog=EmpireOfAges;MultipleActiveResultSets=True;App=EntityFramework");
                //optionsBuilder.UseSqlite(@"filename=~\Database\EoA.db");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "Cyrillic_General_CI_AS");

            modelBuilder.Entity<ClassWarrior>(entity =>
            {
                entity.HasKey(e => new { e.Class, e.Warrior });

                entity.Property(e => e.Class).HasMaxLength(50);

                entity.Property(e => e.Warrior).HasMaxLength(50);
            });

            modelBuilder.Entity<Nation>(entity =>
            {
                entity.HasNoKey();

                entity.Property(e => e.Name).IsRequired();
            });

            modelBuilder.Entity<News>(entity =>
            {
                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.Text)
                    .IsRequired()
                    .HasColumnType("text");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Nickname);

                entity.Property(e => e.Nickname).HasMaxLength(50);

                entity.Property(e => e.Birthday).HasColumnType("date");

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Password)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Surname)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<Warrior>(entity =>
            {
                entity.HasKey(e => e.Name);

                entity.Property(e => e.Name).HasMaxLength(50);

                entity.Property(e => e.Nation)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Picture)
                    .IsRequired()
                    .HasMaxLength(50);
            });

            modelBuilder.Entity<WarriorClass>(entity =>
            {
                entity.HasKey(e => e.Name);

                entity.Property(e => e.Name).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
